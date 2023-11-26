import { axiosInstance } from './axiosInstance';

//팔로우 걸기
export const postFollowUser = async (nickname: string) => {
  const { data } = await axiosInstance.post(`/follows/${nickname}`);
  return data;
};

//팔로우 취소
export const deleteFollowUser = async (nickname: string) => {
  const { data } = await axiosInstance.post(`/follows/${nickname}`);
  return data;
};

//팔로잉 조회
export const getFollowingList = async () => {
  const { data } = await axiosInstance.get('/members/followings');
  return data;
};

//팔로워 조회
export const getFollowerList = async () => {
  const { data } = await axiosInstance.get('/members/followers');
  return data;
};

//현재 팔로우 중인지 조회
export const getCurrentFollowing = async (nickname: string) => {
  const data = await axiosInstance.get(`/follows/isFollower/${nickname}`);
  return data;
};
