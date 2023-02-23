import React from 'react'

import { checkGlyph } from 'Assets/svg/common'
import { closeIconGlyph } from 'Assets/svg/landing'

import { Element, Flex, Icon } from 'Components/UI'

import { theme } from 'Theme'

const useRender = () => {
  const renderTrial = () => (
    <Flex flexWrap="wrap" mb={22} width={1}>
      <Flex alignContent="center" alignItems="center">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Встроенная платформа для видеозвонков</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Интерактивные домашние задания</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Совместные активности с классами-партнерами</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Дебаты, челленджи и квизы</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Общение со сверстниками из 150 стран</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Сообщество педагогов</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Неограниченное количество виртуальных туров</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={closeIconGlyph}
          width={18}
        />
        <Element ml={10}>Дискуссионные клубы (с модераторами)</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={closeIconGlyph}
          width={18}
        />
        <Element ml={10}>Мастер-классы с экспертами</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={closeIconGlyph}
          width={18}
        />
        <Element ml={10}>Профессиональное развитие для учителей</Element>
      </Flex>
    </Flex>
  )

  const renderStandart = () => (
    <Flex flexWrap="wrap" mb={22} width={1}>
      <Flex alignContent="center" alignItems="center">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Встроенная платформа для видеозвонков</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Интерактивные домашние задания</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Совместные активности с классами-партнерами</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Дебаты, челленджи и квизы</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Общение со сверстниками из 150 стран</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Сообщество педагогов</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Неограниченное количество виртуальных туров</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Дискуссионные клубы (с модераторами)</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Мастер-классы с экспертами</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.orange}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Профессиональное развитие для учителей</Element>
      </Flex>
    </Flex>
  )

  const renderPremium = () => (
    <Flex flexWrap="wrap" mb={22} width={1}>
      <Flex alignContent="center" alignItems="center">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Встроенная платформа для видеозвонков</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Интерактивные домашние задания</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Совместные активности с классами-партнерами</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Дебаты, челленджи и квизы</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Общение со сверстниками из 150 стран</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Сообщество педагогов</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Неограниченное количество виртуальных туров</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Дискуссионные клубы (с модераторами)</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Мастер-классы с экспертами</Element>
      </Flex>

      <Flex alignContent="center" alignItems="center" mt="10px">
        <Icon
          fill={theme.colors.green}
          height={12}
          icon={checkGlyph}
          width={18}
        />
        <Element ml={10}>Профессиональное развитие для учителей</Element>
      </Flex>
    </Flex>
  )

  return {
    renderTrial,
    renderStandart,
    renderPremium,
  }
}

export default useRender
