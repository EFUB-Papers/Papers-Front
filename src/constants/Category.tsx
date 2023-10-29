export const Category = {
  CURRENT: '시사',
  CULTURE: '문화',
  TRAVEL: '여행',
  IT: 'IT',
  LIFE: '라이프',
  KNOWLEDGE: '지식',
  ETC: '기타'
} as const;

export type CategoryType = typeof Category;

export type CategoryValuesType = CategoryType[keyof CategoryType];
