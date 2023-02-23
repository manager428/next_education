import React, { useCallback, useEffect, useState } from 'react'

import { DateTime } from 'luxon'
import { NextPage } from 'next'
import Link from 'next/link'

import map from 'lodash/map'

import { ogChallengesImage } from 'Assets/images/og'

import PreviousChallenges from 'Containers/Pages/Challenges/PreviousChallenges'
import Rewards from 'Containers/Pages/Challenges/Rewards'
import {
  Background,
  BlockHeader,
  Content,
  DescriptionHeader,
  HeaderImage,
  LeftSide,
  SubmitSmall,
  SubmitYourProject,
  SubmitYourProjectBlock,
  TabButton,
  TabsWrapper,
  Title,
} from 'Containers/Pages/Challenges/styles'
import Timeline from 'Containers/Pages/Challenges/TimeLine/Timeline'
import WinAndVote from 'Containers/Pages/Challenges/WinAndVote'
import Winners from 'Containers/Pages/Challenges/Winners'

import { Flex } from 'Components/UI'

import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import {
  CHALLENGE_OFFICIAL_START,
  CHALLENGE_SUBMISSION_DEADLINE,
} from 'Constants/challenges'
import { ADD_COMMENT_MODAL_TYPES } from 'Constants/ids'
import { PUBLIC_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { challengesApi } from 'Services/Api/requests'
import CHALLENGES_API_PATHS from 'Services/Api/requests/challenges/paths'
import _, { useScopedI18n } from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

const NOW = DateTime.local()

type Props = {
  initialData: Record<string, any>
}
const Challenges: NextPage<Props> = ({ initialData }) => {
  const s = useScopedI18n('challenges')

  const TABS = {
    challenge: {
      label: s('challenge'),
      value: 'challenge',
    },
    rewards: {
      label: s('rewards'),
      value: 'rewards',
    },
  }

  const [activeTab, setActiveTab] = useState(TABS.challenge.value)
  const [challenge, setChallenge] = useState<number | null>()

  const params = useRouterQueryParams()

  const { data } = useSwrRequest({
    url: CHALLENGES_API_PATHS.CHALLENGES,
    options: { fallbackData: initialData },
  })

  useEffect(() => {
    if (params?.id) {
      setChallenge(+params.id)
    }
  }, [params?.id])

  const renderContent = useCallback(() => {
    if (activeTab === TABS.challenge.value) {
      return (
        <>
          <Timeline />
          <Winners
            data={data?.winners}
            isLoading={!data?.winners}
            onClick={(id: number) => setChallenge(id)}
          />
          <WinAndVote
            isLoading={!data?.winners}
            posts={data?.challenges}
            onPostClick={id => setChallenge(id)}
          />

          {NOW >= CHALLENGE_OFFICIAL_START &&
            NOW <= CHALLENGE_SUBMISSION_DEADLINE && (
              <SubmitYourProjectBlock>
                <div className="title">{s('submitProjectNow')}</div>
                <div className="description">
                  {s('youCanRecordAndSubmit')}
                  <br />
                  {s('moreVideosHigher')}
                </div>
                <Link href={PUBLIC_PATHS.CHALLENGES_SUBMIT} passHref>
                  <SubmitSmall>{_('buttons.submit')}</SubmitSmall>
                </Link>
              </SubmitYourProjectBlock>
            )}

          <PreviousChallenges
            handleOpenModal={id => setChallenge(id)}
            posts={data?.previous}
          />
        </>
      )
    }

    if (activeTab === TABS.rewards.value) {
      return <Rewards />
    }

    return null
  }, [activeTab, data])

  return (
    <Background>
      {challenge && (
        <AddCommentModal
          postId={challenge}
          postType={ADD_COMMENT_MODAL_TYPES.CHALLENGE}
          section={COMPLAINT_SECTIONS.CHALLENGES}
          onClose={() => setChallenge(null)}
        />
      )}

      <Head
        description="Every month we conduct Challenges where students are invited to create video presentations on a chosen topic. Students can improve their communication skills, self-confidence, public speaking skills and leadership abilities while having fun as well as practicing English."
        ogImage={ogChallengesImage.src}
        title="Challenges - #Friendship Challenge | iDialogue"
      />
      <Content>
        <BlockHeader flexWrap="wrap">
          <LeftSide width={520}>
            <Title>
              <span>#Friendship </span>
              Challenge
            </Title>
            <DescriptionHeader>
              <p>
                <b>
                  Friendship is one of the most important things in life. What
                  does friendship mean to you? Have you got a best friend?
                </b>
              </p>
              <p>
                As we have users from 140 countries, it might be fun and
                interesting to{' '}
                <span>
                  explore the world through friendships and to learn what
                  friendship means to people in different cultures.
                </span>
              </p>
              <p>
                Record a short video or create a post to share your Friendship{' '}
                <br />
                story! It can be a story of how you met your best friend or a{' '}
                <br />
                particular situation that has made you realize what a true{' '}
                <br />
                friendship is and who is your best friend! Or you can just tell{' '}
                <br />
                us what friendship means to you!
              </p>
              <p>
                Compare others&apos; stories to yours, make new friends, win
                prizes, and celebrate friendship ☺️
              </p>
            </DescriptionHeader>

            {NOW >= CHALLENGE_OFFICIAL_START &&
              NOW <= CHALLENGE_SUBMISSION_DEADLINE && (
                <Flex mt="24px">
                  <Link href={PUBLIC_PATHS.CHALLENGES_SUBMIT} passHref>
                    <SubmitYourProject>
                      {s('submitProjectNow')}
                    </SubmitYourProject>
                  </Link>
                </Flex>
              )}
          </LeftSide>
          <Flex mt="30px">
            <HeaderImage alt="Friendship" placeholder="blur" />
          </Flex>
        </BlockHeader>

        <TabsWrapper>
          {map(TABS, tab => (
            <TabButton
              active={tab.value === activeTab}
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabsWrapper>

        {renderContent()}
      </Content>
      <Footer />
    </Background>
  )
}

export async function getStaticProps() {
  const data = await challengesApi.challenges()

  return {
    revalidate: 3600,
    props: { initialData: { ...data } },
  }
}

export default Challenges
