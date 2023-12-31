export const COLOR = {
  mint: '#4DD3DB',
  darkMint: '#0e8d93',
  backgroundGrey: '#F2F2F2', //메인 페이지의 포인트 배경 색상
  lightGrey: '#9A9A9A', //원본 링크 글자, 선택되지 않은 옵션
  darkGrey: '#ADADAD', //언팔로우 버튼, 취소 버튼 색상
  blue: '#4491e3',
  error: '#f16829'
};

export const TEXT_SIZE = {
  'text-34': '2.125rem',
  'text-32': '2rem',
  'text-28': '1.75rem',
  'text-24': '1.5rem',
  'text-22': '1.375rem',
  'text-20': '1.25rem',
  'text-18': '1.125rem',
  'text-16': '1rem',
  'text-14': '0.875rem',
  'text-12': '0.75rem'
};

export const LIGHT = {
  background: 'white',
  input: '#f3f3f3',
  selectBox: '#ffffff',
  header: 'rgba(256, 256, 256, 0.7)',
  line: '#C9C9C9',
  lineForDark: `rbga(0,0,0,0)`,
  boxShadow: '3px 3px 10px 3px rgba(0, 0, 0, 0.15)',
  text: 'black',
  COLOR: { ...COLOR },
  TEXT_SIZE: { ...TEXT_SIZE }
};

export const DARK = {
  background: 'black',
  selectBox: '#595959',
  input: '#595959',
  header: 'rgba(0, 0, 0, 0.6)',
  line: '#555',
  lineForDark: '#555',
  boxShadow: ' 0 0 0 0px #666',
  text: 'white',
  COLOR: { ...COLOR },
  TEXT_SIZE: { ...TEXT_SIZE }
};

export const MEDIA = {
  mobile: '400px'
};

export type ThemeType = typeof LIGHT;
