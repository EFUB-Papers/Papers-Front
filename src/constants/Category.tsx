export const CategoryWithoutAll = {
  NEWS: '시사',
  CULTURE: '문화',
  TRAVEL: '여행',
  IT: 'IT',
  LIFE: '라이프',
  KNOWLEDGE: '지식',
  ETC: '기타'
} as const;

export const CATEGORY: { [key: string]: string } = {
  ALL: '카테고리',
  ...CategoryWithoutAll
} as const;

export type CategoryType = typeof CATEGORY;

export type CategoryKeyType = keyof typeof CATEGORY;

export type CategoryValuesType = CategoryType[keyof CategoryType];

export const SEARCH_RANGE: { [key: string]: string } = {
  ALL: '전체',
  TITLECONTENT: '제목, 내용',
  TAG: '태그'
};

export type SearchRangeType = typeof SEARCH_RANGE;

export type SearchRangeKeyType = keyof typeof SEARCH_RANGE;

export type SearchRangeValuesType = SearchRangeType[keyof SearchRangeType];
