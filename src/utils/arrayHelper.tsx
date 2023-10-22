export const arraySlice = (list: any[]): any[][] => {
  const _list = [...list];
  const newArr = [];
  const oneGroupLength = 6;
  for (let i = 0; i < _list.length; i += oneGroupLength) {
    const smallArr = _list.slice(i, i + oneGroupLength);
    newArr.push(smallArr);
  }
  return newArr;
};
