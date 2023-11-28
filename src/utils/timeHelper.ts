export const timeHelper = (date: string) => {
  let changeTime = '';
  const thisTime = new Date();
  const createTime = new Date(date);
  if (thisTime.getFullYear() !== createTime.getFullYear())
    return thisTime.getFullYear() - createTime.getFullYear() + '년 전';
  if (thisTime.getMonth() !== createTime.getMonth())
    return thisTime.getMonth() - createTime.getMonth() + '월 전';
  if (thisTime.getDate() !== createTime.getDate())
    return thisTime.getDate() - createTime.getDate() + '일 전';
  if (thisTime.getHours() !== createTime.getHours())
    return thisTime.getHours() - createTime.getHours() + '시간 전';
  if (thisTime.getMinutes() !== createTime.getMinutes())
    return thisTime.getMinutes() - createTime.getMinutes() + '분 전';
  changeTime = `방금`;

  return changeTime;
};
