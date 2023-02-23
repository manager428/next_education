import React, { useState } from 'react'

import shortId from 'shortid'

import map from 'lodash/map'
import without from 'lodash/without'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import {
  InterestItem,
  Modal,
  PopupInner,
} from 'Components/Blocks/Entities/Profile/ProfileEditPopup/styles'

import { INTERESTS } from 'Constants/common'

type Props = {
  closePopup: (isOpen: boolean) => void
  isLoading: boolean
  popupType: string
  userInterests: string[]
  onSaveClick: (data: Record<string, any>) => void
  bioText?: string
  showPopup?: boolean
}

const ProFileEditPopup: React.FC<Props> = ({
  popupType,
  showPopup = false,
  closePopup,
  bioText = '',
  userInterests = [],
  onSaveClick,
  isLoading = false,
}) => {
  const [userBio, setUserBio] = useState(bioText)
  const [selectedInterests, setSelectedInterests] = useState(userInterests)

  const renderPopupContent = type => {
    switch (type) {
      case 'bio':
        return (
          <PopupInner>
            <div className="title">Tell something about yourself</div>
            <textarea
              value={userBio}
              onChange={e => {
                setUserBio(e.target.value)
              }}
            />
            <div className="actions">
              <button
                className="cancel"
                type="button"
                onClick={() => {
                  setUserBio(bioText)
                  closePopup(false)
                }}
              >
                Cancel
              </button>
              <button
                className="save"
                type="button"
                onClick={() => onSaveClick({ bio: userBio })}
              >
                Save
              </button>
            </div>
          </PopupInner>
        )
      case 'interests':
        return (
          <PopupInner>
            <div className="title">Choose Your Interests</div>
            <div className="interests-list">
              {map(INTERESTS, interest => (
                <InterestItem
                  key={shortId.generate()}
                  selected={selectedInterests.includes(interest)}
                  onClick={() =>
                    selectedInterests.includes(interest)
                      ? setSelectedInterests(
                          without(selectedInterests, interest, ''),
                        )
                      : setSelectedInterests(
                          without([...selectedInterests, interest], ''),
                        )
                  }
                >
                  #{interest}
                </InterestItem>
              ))}
            </div>
            <div className="count-selected">
              {selectedInterests.length} interests selected
            </div>
            <div className="actions">
              <button
                className="cancel"
                type="button"
                onClick={() => {
                  setSelectedInterests(userInterests)
                  closePopup(false)
                }}
              >
                Cancel
              </button>
              <button
                className="save"
                type="button"
                onClick={() => onSaveClick({ interests: selectedInterests })}
              >
                Save
              </button>
            </div>
          </PopupInner>
        )
      default:
        return null
    }
  }
  return (
    <>
      <Modal
        ariaHideApp={false}
        contentLabel=""
        isOpen={showPopup}
        onRequestClose={() => {
          closePopup(false)
        }}
      >
        {isLoading ? (
          <Flex
            alignItems="center"
            flex={1}
            flexDirection="column"
            justifyContent="center"
          >
            <Loader />
          </Flex>
        ) : (
          renderPopupContent(popupType)
        )}
      </Modal>
    </>
  )
}

export default ProFileEditPopup
