import React from 'react'
import PT from 'prop-types'

import Image from 'next/image'

import {
  RewardCount,
  RewardWrapper,
  Title,
} from 'Components/Blocks/Entities/Profile/Content/Badges/RewardItem/styles'

const RewardItem = ({ rewardImage, rewardTitle, bottomMargin, count }) => (
  <RewardWrapper bottomMargin={bottomMargin}>
    <Image placeholder="blur" src={rewardImage} />
    {rewardTitle.length > 0 && <Title>{rewardTitle}</Title>}
    {count > 0 && <RewardCount>x{count}</RewardCount>}
  </RewardWrapper>
)

RewardItem.defaultProps = {
  bottomMargin: 20,
  count: 0,
  rewardTitle: '',
}

RewardItem.propTypes = {
  bottomMargin: PT.number,
  count: PT.number,
  rewardImage: PT.any.isRequired,
  rewardTitle: PT.string,
}

export default RewardItem
