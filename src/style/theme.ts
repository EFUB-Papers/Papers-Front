const theme = {
  COLOR: {
    mint: "#4DD3DB",
    backgroundGrey: "#F2F2F2", //메인 페이지의 포인트 배경 색상
    lineGrey: "#C9C9C9",
    lightGrey: "#9A9A9A", //원본 링크 글자, 선택되지 않은 옵션
    darkGrey: "#ADADAD" //언팔로우 버튼, 취소 버튼 색상
  },
  TEXT_SIZE: {
    "text-34": "2.125rem",
    "text-32": "2rem",
    "text-28": "1.75rem",
    "text-24": "1.5rem",
    "text-22": "1.375rem",
    "text-20": "1.25rem",
    "text-18": "1.125rem",
    "text-16": "1rem",
    "text-14": "0.875rem",
    "text-12": "0.75rem"
  }
};

export default theme;

export type ThemeType = typeof theme;
