import {
  student3,
  student5,
  student9,
  student11,
} from 'Assets/images/landing/reviews/students'
import {
  aliceiReview,
  anitakReview,
  annamReview,
  kirabReview,
  leramReview,
  lizakReview,
  mariakReview,
  paveltReview,
  roramReview,
  sofiavReview,
  timofeylReview,
  vanyatReview,
} from 'Assets/images/landing/reviews/students/russian'

export const REVIEWS = [
  {
    id: 1,
    text:
      'Когда я захожу в iDialogue и читаю сообщения студентов из других стран, просто невероятно, насколько лучше становится понимание жизни. Например, когда вы читаете об их опыте за границей или о том, чем они занимаются в свободное время - все это дает представление о другом измерении, которое невозможно увидеть собственными глазами! \n',
    author: 'Лера М.',
    country: '',
    avatar: leramReview.src,
  },
  {
    id: 2,
    text:
      'Я никогда не думал, что общение с человеком из другой страны может быть настолько интересным и приятным! ',
    author: 'Рома Михайлов',
    country: '',
    avatar: roramReview.src,
  },
  {
    id: 3,
    text:
      'Это отличная платформа! Мне нравится общаться с учителями и другими детьми \n',
    author: 'Тимофей Л.',
    country: '',
    avatar: timofeylReview.src,
  },
  {
    id: 4,
    text:
      'Это отличная платформа. Я пользуюсь ею уже довольно давно и нашла здесь много друзей, все они - замечательные люди, с которыми можно общаться каждый день! ',
    author: 'Кира В.',
    country: '',
    avatar: kirabReview.src,
  },
  {
    id: 5,
    text:
      'Мне нравится, что тут нет скучных занятий, все проходит весело и интересно.',
    author: 'Аня Матвеева',
    country: '',
    avatar: annamReview.src,
  },

  {
    id: 6,
    text:
      'Это отличный способ поговорить на английском и найти новая друзей! Мне очень нравится посещать виртуальные путешествия, это не заменяет настоящие путешествия, конечно же, но дает возможность увидеть мир. \n',
    author: 'Анита К.',
    country: '',
    avatar: anitakReview.src,
  },

  {
    id: 7,
    text:
      'Всегда интересно узнать, что у детей, живущих далеко друг от друга, много общих интересов и увлечений. Я была удивлена, как много у нас общего несмотря на то, что наши культуры могут быть разными! \n',
    author: 'Алиса И.',
    country: '',
    avatar: aliceiReview.src,
  },
  {
    id: 8,
    text:
      'Я посетила виртуальный тур в Таиланд и была рада увидеть знакомые пейзажи и обстановку, потому что из-за ситуации в мире очень тяжело путешествовать безопасно, а снова увидеть любимую азиатскую страну – очень хотелось! Спасибо iDialogue.',
    author: 'Лиза К',
    country: '',
    avatar: lizakReview.src,
  },
  {
    id: 9,
    text:
      'Благодаря iDialogue мой английский стал лучше, а также я нашла много новых друзей из разных стран! ',
    author: 'Павел Т.',
    country: '',
    avatar: paveltReview.src,
  },
  {
    id: 10,
    text:
      'Эта платформа позволяет мне посетить страны, в которых я мечтал побывать, и у меня появилось много друзей, с которыми я переписываюсь каждый день, улучшая свои знания английского.',
    author: 'Мария К',
    country: '',
    avatar: mariakReview.src,
  },
  {
    id: 11,
    text:
      'Каждый день я с нетерпением жду занятия и туры в iDialogue, потому что после каждой активности на этой платформе, у меня улучшается настроение, я узнаю что-то новое о других странах, а также общаюсь с друзьями со всего мира!',
    author: 'Ваня В.',
    country: '',
    avatar: vanyatReview.src,
  },
  {
    id: 12,
    text:
      'Я так рада, что учусь в iDialogue, потому что мой английский стал намного лучше, благодаря занятиям и общению с учителями, а также на виртуальных турах я не только посещаю места, в которых никогда не была, но и улучшаю свой английский.',
    author: 'Софья В.',
    country: '',
    avatar: sofiavReview.src,
  },
]

export const MAP_REVIEWS = [
  {
    id: 1,
    review:
      'Мне нравится, что тут нет скучных занятий, все проходит весело и интересно.',
    author: 'Аня Матвеева',
    avatar: annamReview.src,
    coords: {
      top: 113,
      left: 500,
    },
  },
  {
    id: 2,
    review:
      'Я посетила виртуальный тур в Таиланд и была рада увидеть знакомые пейзажи и обстановку, потому что из-за ситуации в мире очень тяжело путешествовать безопасно, а снова увидеть любимую азиатскую страну – очень хотелось! Спасибо iDialogue.',
    author: 'Лиза К',
    avatar: lizakReview.src,
    coords: {
      top: 85,
      left: 450,
    },
  },
  {
    id: 3,
    review:
      'Каждый день я с нетерпением жду занятия и туры в iDialogue, потому что после каждой активности на этой платформе, у меня улучшается настроение, я узнаю что-то новое о других странах, а также общаюсь с друзьями со всего мира!',
    author: 'Ваня В.',
    avatar: vanyatReview.src,
    coords: {
      top: 120,
      left: 450,
    },
  },
  {
    id: 4,
    review: 'This is an awesome platform! Thank you!',
    author: 'Diego H.',
    avatar: student3.src,
    coords: {
      top: 165,
      left: 300,
    },
  },
  {
    id: 5,
    review:
      'I love iDialogue challenges because they help me to tell others about my country and learn more about the world.',
    author: 'Marry K.',
    avatar: student11.src,
    coords: {
      top: 165,
      left: 375,
    },
  },
  {
    id: 6,
    review:
      'This platform helps me to share my country with others through letters and phone calls and find that I really like them too.',
    author: 'Valerio K.',
    avatar: student9.src,
    coords: {
      top: 290,
      left: 220,
    },
  },
  {
    id: 7,
    review:
      'My teacher loves giving us different activities. One day she said "You will make different friends». I was happy to hear that and it was true. Using iDialogue platform I made a new friend  who lives in another country. Thank you very much!!',
    author: 'Kartik K.',
    avatar: student5.src,
    coords: {
      top: 260,
      left: 530,
    },
  },
]
