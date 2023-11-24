export const CategoryWithoutAll = {
  news: '시사',
  culture: '문화',
  travel: '여행',
  it: 'IT',
  life: '라이프',
  knowledge: '지식',
  etc: '기타'
} as const;

export const CATEGORY: { [key: string]: string } = {
  ALL: '카테고리',
  ...CategoryWithoutAll
} as const;

export type CategoryWithoutAllKeyType = keyof typeof CategoryWithoutAll;

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
