export const CATEGORY_WITHOUT_ALL: { [key: string]: string } = {
  news: '시사',
  culture: '문화',
  tour: '여행',
  it: 'IT',
  life: '라이프',
  knowledge: '지식',
  etc: '기타'
} as const;

export const CATEGORY: { [key: string]: string } = {
  all: '카테고리',
  ...CATEGORY_WITHOUT_ALL
} as const;

export type CategoryType = typeof CATEGORY;

export type CategoryKeyType = keyof typeof CATEGORY;

export type CategoryValuesType = CategoryType[keyof CategoryType];

export const SEARCH_RANGE_WITHOUT_RANGE = {
  titleContent: '제목,내용',
  tag: '태그'
} as const;

export const SEARCH_RANGE: { [key: string]: string } = {
  all: '전체',
  ...SEARCH_RANGE_WITHOUT_RANGE
} as const;

export type SearchRangeType = typeof SEARCH_RANGE;

export type SearchRangeKeyType = keyof typeof SEARCH_RANGE;

export type SearchRangeValuesType = SearchRangeType[keyof SearchRangeType];
