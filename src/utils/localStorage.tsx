export const LocalStorage = {
  getNickname: () => {
    return localStorage.getItem('nickname');
  },
  setNickname: (newNickname: string) => {
    localStorage.setItem('nickname', newNickname);
  }
};
