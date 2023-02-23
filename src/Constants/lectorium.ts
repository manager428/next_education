export const POST_STATUS_TYPES = {
  COMPLETED: 'completed',
  LOCKED: 'locked',
  ACTIVE: 'active',
  NEW: 'new',
}

export const POST_PROGRESS_TYPES = {
  QUIZ: 'quiz',
  VIDEO: 'video',
  READING: 'reading',
  WORDS: 'words',
  SHARE_EXPERIENCE: 'share_experience',
}

export const SHARE_EXPERIENCE_TYPES = {
  STUDENT_VIDEOS: 'student_videos',
  STUDENT_POSTS: 'student_posts',
  COMMENTS: 'comments',
}

export const SHARE_EXPERIENCE_COUNT = {
  [SHARE_EXPERIENCE_TYPES.COMMENTS]: 'experience_comments_count',
  [SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS]: 'experience_videos_count',
  [SHARE_EXPERIENCE_TYPES.STUDENT_POSTS]: 'experience_photos_count',
}

// Create Lectorium

export const DEFAULT_QUIZ = {
  quizType: {
    label: 'Single Choice',
    value: 'single_choice',
  },
  question: '',
  answers: {
    A: {
      correct: {
        value: 'true',
        label: 'Right Answer',
      },
    },
    B: {
      correct: {
        value: 'false',
        label: 'Wrong Answer',
      },
    },
    C: {
      correct: {
        value: 'false',
        label: 'Wrong Answer',
      },
    },
    D: {
      correct: {
        value: 'false',
        label: 'Wrong Answer',
      },
    },
  },
}

export const DEFAULT_QUIZ_TRUE_FALSE = {
  quizType: {
    label: 'True / False',
    value: 'true_false',
  },
  question: '',
  answers: {
    A: {
      correct: {
        value: 'true',
        label: 'Right Answer',
      },
    },
    B: {
      correct: {
        value: 'false',
        label: 'Wrong Answer',
      },
    },
  },
}

export const DEFAULT_NEW_WORD = {
  word: '',
  description: '',
}

export const DEFAULT_ANSWERS = ['A', 'B', 'C', 'D']
export const TRUE_FALSE_ANSWERS = ['A', 'B']

export const QUIZ_TYPES = {
  trueFalse: 'true_false',
  singleChoice: 'single_choice',
  multipleChoice: 'multiple_choice',
}

export const ACTIVITY_TYPES = {
  quiz: 'quiz',
  newWords: 'new_words',
  nothing: 'nothing',
}

export const LECTORIUM_CATEGORIES = [
  { label: 'English', value: 'english' },
  { label: 'Creative', value: 'creative' },
  { label: 'Discussions', value: 'discussions' },
  { label: 'Health & Wellness', value: 'health_wellness' },
  { label: 'Life Skills', value: 'life_skills' },
  { label: 'Math', value: 'math' },
  { label: 'Science & Nature', value: 'science_nature' },
  { label: 'Social Studies', value: 'social_studies' },
  { label: 'World Languages', value: 'world_languages' },
  { label: 'Coding & Tech', value: 'coding_tech' },
  { label: 'Virtual Field Trips', value: 'virtual_field_trips' },
  { label: 'Other', value: 'other' },
]

export const LECTORIUM_DURATION_OPTIONS = [
  4,
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  105,
  110,
  115,
  120,
  121,
]
