import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import { SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'

import _ from 'Services/I18n'

import List from './List/List'
import { Container, TabItem, Title } from './styles'

class PostsList extends PureComponent {
  state = {
    selectedTab: 'latest',
    searchQuery: '',
  }

  handleSelectTab = tab => {
    this.setState({
      selectedTab: tab,
    })
  }

  render() {
    const TABS = [
      {
        label: _('buttons.latest'),
        value: 'latest',
      },
      {
        label: _('buttons.popular'),
        value: 'popular',
      },
    ]
    const { isLoading, isLogged, data, onQuery, type, lectoriumId } = this.props
    const { selectedTab, searchQuery } = this.state

    return (
      <Container>
        <Flex justifyContent="space-between" mt={67} width={1}>
          <Title>
            {type === SHARE_EXPERIENCE_TYPES.STUDENT_POSTS
              ? _('lectorium.view.watchPostsFromOtherStudents')
              : _('lectorium.view.watchVideosFromOtherStudents')}
          </Title>
        </Flex>
        <div className="tabs-wrap">
          <div className="tab-items">
            {data.length > 0 &&
              map(TABS, tab => (
                <TabItem
                  isActive={selectedTab === tab.value}
                  key={tab.value}
                  onClick={() => this.handleSelectTab(tab.value)}
                >
                  {tab.label}
                </TabItem>
              ))}
          </div>
        </div>

        <List
          data={data}
          isLoading={isLoading}
          isLogged={isLogged}
          lectoriumId={lectoriumId}
          searchQuery={searchQuery}
          sorting={selectedTab}
          type={type}
          onModalCallback={onQuery}
        />
      </Container>
    )
  }
}

PostsList.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  lectoriumId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired,
}
export default PostsList
