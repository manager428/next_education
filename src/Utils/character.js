import get from 'lodash/get'

import {
  elephantBoy1,
  elephantBoy2,
  elephantBoy3,
  elephantBoy4,
  elephantBoySad1,
  elephantBoySad2,
  elephantBoySad3,
  elephantBoySad4,
  elephantGirl1,
  elephantGirl2,
  elephantGirl3,
  elephantGirl4,
  elephantGirlSad1,
  elephantGirlSad2,
  elephantGirlSad3,
  elephantGirlSad4,
  foxBoy1,
  foxBoy2,
  foxBoy3,
  foxBoy4,
  foxBoySad1,
  foxBoySad2,
  foxBoySad3,
  foxBoySad4,
  foxGirl1,
  foxGirl2,
  foxGirl3,
  foxGirl4,
  foxGirlSad1,
  foxGirlSad2,
  foxGirlSad3,
  foxGirlSad4,
  giraffBoy1,
  giraffBoy2,
  giraffBoy3,
  giraffBoy4,
  giraffBoySad1,
  giraffBoySad2,
  giraffBoySad3,
  giraffBoySad4,
  giraffGirl1,
  giraffGirl2,
  giraffGirl3,
  giraffGirl4,
  giraffGirlSad1,
  giraffGirlSad2,
  giraffGirlSad3,
  giraffGirlSad4,
  koalaBoy1,
  koalaBoy2,
  koalaBoy3,
  koalaBoy4,
  koalaBoySad1,
  koalaBoySad2,
  koalaBoySad3,
  koalaBoySad4,
  koalaGirl1,
  koalaGirl2,
  koalaGirl3,
  koalaGirl4,
  koalaGirlSad1,
  koalaGirlSad2,
  koalaGirlSad3,
  koalaGirlSad4,
  lamaBoy1,
  lamaBoy2,
  lamaBoy3,
  lamaBoy4,
  lamaBoySad1,
  lamaBoySad2,
  lamaBoySad3,
  lamaBoySad4,
  lamaGirl1,
  lamaGirl2,
  lamaGirl3,
  lamaGirl4,
  lamaGirlSad1,
  lamaGirlSad2,
  lamaGirlSad3,
  lamaGirlSad4,
  penguinBoy1,
  penguinBoy2,
  penguinBoy3,
  penguinBoy4,
  penguinBoySad1,
  penguinBoySad2,
  penguinBoySad3,
  penguinBoySad4,
  penguinGirl1,
  penguinGirl2,
  penguinGirl3,
  penguinGirl4,
  penguinGirlSad1,
  penguinGirlSad2,
  penguinGirlSad3,
  penguinGirlSad4,
} from 'Assets/images/characters'

export const EGG_BLUE = 'egg_blue'
export const EGG_GRAY = 'egg_gray'
export const EGG_ORANGE = 'egg_orange'
export const EGG_PINK = 'egg_pink'
export const EGG_RED = 'egg_red'
export const EGG_GREEN = 'egg_green'

export const getCharacterLevel = level => {
  let levelParam
  switch (level) {
    case 1:
      levelParam = 'petSmall'
      break
    case 2:
      levelParam = 'petMiddle'
      break
    case 3:
      levelParam = 'petBig'
      break
    case 4:
      levelParam = 'petOld'
      break
    default:
      levelParam = 'petSmall'
      break
  }
  return levelParam
}

export const getEggsSettings = () => {
  const eggsSettings = {
    [EGG_BLUE]: {
      eggType: EGG_BLUE,

      male: {
        petSmall: elephantBoy1,
        petMiddle: elephantBoy2,
        petBig: elephantBoy3,
        petOld: elephantBoy4,
      },
      female: {
        petSmall: elephantGirl1,
        petMiddle: elephantGirl2,
        petBig: elephantGirl3,
        petOld: elephantGirl4,
      },
      sad: {
        male: {
          petSmall: elephantBoySad1,
          petMiddle: elephantBoySad2,
          petBig: elephantBoySad3,
          petOld: elephantBoySad4,
        },
        female: {
          petSmall: elephantGirlSad1,
          petMiddle: elephantGirlSad2,
          petBig: elephantGirlSad3,
          petOld: elephantGirlSad4,
        },
      },
    },
    [EGG_GRAY]: {
      eggType: EGG_GRAY,

      male: {
        petSmall: foxBoy1,
        petMiddle: foxBoy2,
        petBig: foxBoy3,
        petOld: foxBoy4,
      },
      female: {
        petSmall: foxGirl1,
        petMiddle: foxGirl2,
        petBig: foxGirl3,
        petOld: foxGirl4,
      },
      sad: {
        male: {
          petSmall: foxBoySad1,
          petMiddle: foxBoySad2,
          petBig: foxBoySad3,
          petOld: foxBoySad4,
        },
        female: {
          petSmall: foxGirlSad1,
          petMiddle: foxGirlSad2,
          petBig: foxGirlSad3,
          petOld: foxGirlSad4,
        },
      },
    },
    [EGG_ORANGE]: {
      eggType: EGG_ORANGE,

      male: {
        petSmall: giraffBoy1,
        petMiddle: giraffBoy2,
        petBig: giraffBoy3,
        petOld: giraffBoy4,
      },
      female: {
        petSmall: giraffGirl1,
        petMiddle: giraffGirl2,
        petBig: giraffGirl3,
        petOld: giraffGirl4,
      },
      sad: {
        male: {
          petSmall: giraffBoySad1,
          petMiddle: giraffBoySad2,
          petBig: giraffBoySad3,
          petOld: giraffBoySad4,
        },
        female: {
          petSmall: giraffGirlSad1,
          petMiddle: giraffGirlSad2,
          petBig: giraffGirlSad3,
          petOld: giraffGirlSad4,
        },
      },
    },
    [EGG_PINK]: {
      eggType: EGG_PINK,

      male: {
        petSmall: koalaBoy1,
        petMiddle: koalaBoy2,
        petBig: koalaBoy3,
        petOld: koalaBoy4,
      },
      female: {
        petSmall: koalaGirl1,
        petMiddle: koalaGirl2,
        petBig: koalaGirl3,
        petOld: koalaGirl4,
      },
      sad: {
        male: {
          petSmall: koalaBoySad1,
          petMiddle: koalaBoySad2,
          petBig: koalaBoySad3,
          petOld: koalaBoySad4,
        },
        female: {
          petSmall: koalaGirlSad1,
          petMiddle: koalaGirlSad2,
          petBig: koalaGirlSad3,
          petOld: koalaGirlSad4,
        },
      },
    },
    [EGG_RED]: {
      eggType: EGG_RED,

      male: {
        petSmall: lamaBoy1,
        petMiddle: lamaBoy2,
        petBig: lamaBoy3,
        petOld: lamaBoy4,
      },
      female: {
        petSmall: lamaGirl1,
        petMiddle: lamaGirl2,
        petBig: lamaGirl3,
        petOld: lamaGirl4,
      },
      sad: {
        male: {
          petSmall: lamaBoySad1,
          petMiddle: lamaBoySad2,
          petBig: lamaBoySad3,
          petOld: lamaBoySad4,
        },
        female: {
          petSmall: lamaGirlSad1,
          petMiddle: lamaGirlSad2,
          petBig: lamaGirlSad3,
          petOld: lamaGirlSad4,
        },
      },
    },
    [EGG_GREEN]: {
      eggType: EGG_GREEN,

      male: {
        petSmall: penguinBoy1,
        petMiddle: penguinBoy2,
        petBig: penguinBoy3,
        petOld: penguinBoy4,
      },
      female: {
        petSmall: penguinGirl1,
        petMiddle: penguinGirl2,
        petBig: penguinGirl3,
        petOld: penguinGirl4,
      },
      sad: {
        male: {
          petSmall: penguinBoySad1,
          petMiddle: penguinBoySad2,
          petBig: penguinBoySad3,
          petOld: penguinBoySad4,
        },
        female: {
          petSmall: penguinGirlSad1,
          petMiddle: penguinGirlSad2,
          petBig: penguinGirlSad3,
          petOld: penguinGirlSad4,
        },
      },
    },
  }

  return eggsSettings
}

export const getCharacterSource = character => {
  let characterSource = null
  const characterType = get(character, 'monster_type', false)
  const characterGender = get(character, 'gender', false)
  const characterLevel = get(character, 'level', 1)
  const isCharacterSad = get(character, 'sad', false)
  const imageSettings = getEggsSettings()
  if (characterType && characterGender) {
    const characterParamLevel = getCharacterLevel(characterLevel)
    characterSource = isCharacterSad
      ? imageSettings[characterType].sad[characterGender][characterParamLevel]
      : imageSettings[characterType][characterGender][characterParamLevel]
  }
  return characterSource
}
