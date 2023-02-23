import React, { useCallback } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'

import { Flex, Loader } from 'Components/UI'

import ViewCallModal from 'Components/Blocks/Entities/Calls/Modals/ViewCallModal'
import { NotificationList } from 'Components/Blocks/Entities/Notifications'
import { NotificationType } from 'Components/Blocks/Entities/Notifications/types'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'
import Pagination from 'Components/Blocks/Pagination'

import { CALL_ENUM } from 'Constants/calls'
import { ADD_COMMENT_MODAL_TYPES, USER_ROLES } from 'Constants/ids'
import {
  STUDENT_SIDEBAR_OPTIONS,
  TEACHER_SIDEBAR_OPTIONS,
} from 'Constants/notiifcations'
import { PRIVATE_PATHS } from 'Constants/paths'

import useRole from 'Hooks/useRole'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  closeAddCommentModal,
  closeViewCallModal,
  openAddCommentModal,
  openViewCallModal,
} from 'Store/modals/slice'

import { notificationsApi } from 'Services/Api/requests'
import NOTIFICATION_API_PATHS from 'Services/Api/requests/notifications/paths'
import { useScopedI18n } from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import {
  Background,
  CallFilter,
  Container,
  Content,
  NoNotifications,
  Sidebar,
  SidebarLink,
  Title,
} from './styles'

const CALL_TYPES_FILTERS = {
  all: 'All Calls',
  [CALL_ENUM.GROUP_CALLS]: 'Group Calls',
  [CALL_ENUM.INDIVIDUAL_CALLS]: 'Individual Calls',
  [CALL_ENUM.CLASS_CALLS]: 'Class Calls',
}

type NotificationListType = Array<{
  date: string
  notifications: Array<NotificationType>
}>

type PaginationType = {
  lastPage: number
  total: number
  info: string
}

const Notifications: React.FC = () => {
  const params = useRouterQueryParams()
  const { role } = useRole()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const modalState = useAppSelector(state => state.modals)
  const scopedSidebar = useScopedI18n('notifications.sidebar')

  const category = params?.category as string | undefined
  const { callType, page = 1 } = pick(params, ['callType', 'page'])

  const queryParams = pickBy({
    call_type: callType,
    notification_type: category === 'all' ? null : category,
    page,
  })

  const { data, isLoading, mutate } = useSwrRequest({
    url: NOTIFICATION_API_PATHS.notifications,
    query: queryParams,
  })

  const SIDEBAR_OPTIONS =
    role === USER_ROLES.teacher
      ? TEACHER_SIDEBAR_OPTIONS(scopedSidebar)
      : STUDENT_SIDEBAR_OPTIONS(scopedSidebar)

  const handleOpenViewCallModal = (id: number) => {
    dispatch(openViewCallModal({ id }))
  }

  const handleCloseViewCallModal = () => {
    dispatch(closeViewCallModal())
  }

  const handleDeleteNotification = async (id: number): Promise<void> => {
    try {
      await notificationsApi.delete(id)

      await mutate(
        currentState => ({
          data: {
            posts: map(currentState.data.posts, day =>
              filter(day, post => post.id !== id),
            ),
            pagination: {
              ...currentState.data.pagination,
            },
          },
        }),
        false,
      )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const handlePageChange = async (pageNumber: number) => {
    if (!callType) {
      await router.push(
        `${PRIVATE_PATHS.NOTIFICATIONS(category || 'all')}?page=${pageNumber}`,
      )
    } else {
      await router.push(
        `${PRIVATE_PATHS.NOTIFICATIONS(
          category,
        )}?callType=${callType}&page=${pageNumber}`,
      )
    }
  }

  const handleOpenAddCommentModal = (id: number) => {
    dispatch(openAddCommentModal({ id }))
  }

  const handleCloseAddCommentModal = useCallback(() => {
    dispatch(closeAddCommentModal())
  }, [])

  const getPaginatedData = useCallback(() => {
    const pagination: PaginationType = get(data, ['pagination'])
    const pagePosts = get(data, ['posts'], [])

    const convertedNotifications: NotificationListType = map(
      pagePosts,
      (it, index) => ({
        date: index,
        notifications: it,
      }),
    )

    return {
      posts: convertedNotifications,
      pagination,
    }
  }, [data])

  const renderSidebarItems = (): React.ReactNode =>
    map(
      SIDEBAR_OPTIONS,
      (it: { name: string; category: string; path: string }) => {
        const isSelected =
          typeof category === 'undefined' && it.category === 'all'
            ? true
            : category === it.category

        return (
          <Link href={it.path} key={it.category} passHref>
            <SidebarLink active={isSelected}>{it.name}</SidebarLink>
          </Link>
        )
      },
    )

  const renderNotificationLists = (): React.ReactNode => {
    const { posts: notifications } = getPaginatedData()

    if (notifications.length === 0) {
      return (
        <Flex flexWrap="wrap" justifyContent="center" mt={40} width={1}>
          <Title mb={13}>You have no notifications</Title>
          <NoNotifications />
        </Flex>
      )
    }
    return map(notifications, (list, index) => (
      <NotificationList
        date={list.date}
        key={index}
        notifications={list.notifications}
        onAction={handleOpenViewCallModal}
        onDeleteCard={handleDeleteNotification}
        onOpenCommunity={handleOpenAddCommentModal}
      />
    ))
  }

  const renderFilters = (): React.ReactNode => {
    const { posts: notifications } = getPaginatedData()

    if (notifications.length === 0) {
      return null
    }

    switch (category) {
      case 'call': {
        return map(CALL_TYPES_FILTERS, (it, ind) => {
          if (ind === 'all' && typeof callType === 'undefined') {
            return (
              <Link
                href={`${PRIVATE_PATHS.NOTIFICATIONS(
                  category,
                )}?callType=${ind}`}
                key={ind}
                passHref
              >
                <CallFilter active>{it}</CallFilter>
              </Link>
            )
          }

          return (
            <Link
              href={`${PRIVATE_PATHS.NOTIFICATIONS(category)}?callType=${ind}`}
              key={ind}
              passHref
            >
              <CallFilter active={ind === callType}>{it}</CallFilter>
            </Link>
          )
        })
      }
      default:
        return null
    }
  }

  const { posts: notifications, pagination } = getPaginatedData()

  return (
    <Background>
      <Head description="Notifications" title="Notifications" />

      <Container>
        <Sidebar>{renderSidebarItems()}</Sidebar>
        <Content>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {renderFilters()}
              {renderNotificationLists()}
              {notifications.length > 0 && (
                <Pagination
                  info={get(pagination, 'info', '')}
                  lastPage={+get(pagination, 'lastPage', 1)}
                  page={+page}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </Content>
      </Container>

      {modalState.viewCallModal.isOpen && modalState.viewCallModal.id && (
        <ViewCallModal
          id={modalState.viewCallModal.id}
          isOpen={modalState.viewCallModal.isOpen}
          onClose={handleCloseViewCallModal}
        />
      )}

      {modalState.addCommentModal.isOpen && modalState.addCommentModal.id && (
        <AddCommentModal
          postId={modalState.addCommentModal.id}
          postType={ADD_COMMENT_MODAL_TYPES.COMMUNITY}
          section={COMPLAINT_SECTIONS.COMMUNITY}
          onClose={handleCloseAddCommentModal}
        />
      )}

      <Footer />
    </Background>
  )
}

export default Notifications
