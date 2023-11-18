import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
  const currentTime = new Date();
  //30분을 만료시간으로 설정함.
  const expires = new Date(currentTime.getTime() + 30 * 60000);
  return cookies.set(name, value, { expires, ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
