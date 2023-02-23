import React from 'react'

import Image from 'next/image'

import { challengePrizes } from 'Assets/images/challenges'
import {
  awardsFirstGlyph,
  awardsSecondGlyph,
  awardsThirdGlyph,
  howToWinFirstGlyph,
  howToWinSecondGlyph,
  howToWinThirdGlyph,
} from 'Assets/svg/challenges'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import { useScopedI18n } from 'Services/I18n'

import {
  Item,
  ItemDescription,
  ItemSubtitle,
  ItemTitle,
  PrizesText,
  Section,
  SectionTitle,
} from './styles'

import { Content } from '../styles'

const Rewards: React.FC = () => {
  const s = useScopedI18n('challenges')

  return (
    <Content>
      <Section flexWrap="wrap" mb={100}>
        <SectionTitle mb={40}>{s('howToWin')}</SectionTitle>
        <Flex justifyContent="space-between" width={1}>
          <Item withBackground>
            <Icon height={100} icon={howToWinFirstGlyph} width={224} />
            <ItemTitle>{s('submitPost')}</ItemTitle>
            <ItemDescription>{s('submitPostDescription')}</ItemDescription>
          </Item>
          <Item withBackground>
            <Icon height={100} icon={howToWinSecondGlyph} width={188} />
            <ItemTitle>{s('waitForResult')}</ItemTitle>
            <ItemDescription>{s('waitForResultDescription')}</ItemDescription>
          </Item>
          <Item withBackground>
            <Icon height={100} icon={howToWinThirdGlyph} width={208} />
            <ItemTitle>{s('getYourPrize')}</ItemTitle>
            <ItemDescription>{s('getYourPrizeDescription')}</ItemDescription>
          </Item>
        </Flex>
      </Section>
      <Section flexWrap="wrap" mb={100}>
        <SectionTitle mb={40}>{s('awardCategories')}</SectionTitle>
        <Flex alignItems="flex-start" justifyContent="space-between" width={1}>
          <Item>
            <Icon height={240} icon={awardsFirstGlyph} width={296} />
            <ItemTitle>{s('peopleChoice')}</ItemTitle>
            <ItemSubtitle>{s('beAttentive')}</ItemSubtitle>
            <ItemDescription>{s('peopleChoiceDescription')}</ItemDescription>
          </Item>
          <Item>
            <Icon height={240} icon={awardsSecondGlyph} width={296} />
            <ItemTitle>{s('usersChoice')}</ItemTitle>
            <ItemSubtitle>{s('moreLikes')}</ItemSubtitle>
            <ItemDescription>{s('userChoiceDescription')}</ItemDescription>
          </Item>
          <Item>
            <Icon height={240} icon={awardsThirdGlyph} width={296} />
            <ItemTitle>{s('ourPick')}</ItemTitle>
            <ItemSubtitle>{s('speakSincerely')}</ItemSubtitle>
            <ItemDescription>{s('ourPickDescription')}</ItemDescription>
          </Item>
        </Flex>
      </Section>

      {/* <Section flexWrap="wrap" mb={45}> */}
      {/*  <SectionTitle mb={40}>Prizes</SectionTitle> */}
      {/*  <Flex alignItems="flex-start" justifyContent="space-between" width={1}> */}
      {/*    <Item> */}
      {/*      <ItemTitle>People’s Choice</ItemTitle> */}
      {/*      <Flex flexWrap="wrap"> */}
      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={peopleChoiceFirstGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>1st place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}

      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={peopleChoiceSecondGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>2nd place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}

      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={peopleChoiceThirdGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>3rd place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}
      {/*      </Flex> */}
      {/*    </Item> */}

      {/*    <Item> */}
      {/*      <ItemTitle>User’s Choice</ItemTitle> */}
      {/*      <Flex flexWrap="wrap"> */}
      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={userChoiceFirstGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>1st place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}

      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={userChoiceSecondGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>2nd place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}

      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={userChoiceThirdGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>3rd place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}
      {/*      </Flex> */}
      {/*    </Item> */}
      {/*    <Item> */}
      {/*      <ItemTitle>Our Pick</ItemTitle> */}
      {/*      <Flex flexWrap="wrap"> */}
      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={ourPickFirstGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>1st place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}

      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={ourPickSecondGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>2nd place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}

      {/*        <Flex> */}
      {/*          <Icon */}
      {/*            height={44} */}
      {/*            icon={ourPickThirdGlyph} */}
      {/*            width={44} */}
      {/*            wrapperStyles={{ */}
      {/*              flexShrink: 0, */}
      {/*              mt: 24, */}
      {/*            }} */}
      {/*          /> */}
      {/*          <Flex flexWrap="wrap"> */}
      {/*            <PrizesTitle>3rd place</PrizesTitle> */}
      {/*            <PrizesDescription mt="8px" textAlign="left"> */}
      {/*              Personal mentoring for your project for month */}
      {/*            </PrizesDescription> */}
      {/*          </Flex> */}
      {/*        </Flex> */}
      {/*      </Flex> */}
      {/*    </Item> */}
      {/*  </Flex> */}
      {/* </Section> */}

      <Section alignItems="center" justifyContent="center" mb={80} width={1}>
        <Flex>
          <Image
            height={200}
            layout="fixed"
            src={challengePrizes}
            width={156}
          />
        </Flex>
        <Flex ml={40}>
          <PrizesText>
            Each Participant Will Receive <br /> a New Badge and Certificate!
          </PrizesText>
        </Flex>
      </Section>
    </Content>
  )
}

export default Rewards
