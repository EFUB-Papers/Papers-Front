import { atom } from 'recoil';

export const folderModalAtom = atom({
  key: 'folderModal',
  default: {
    option: 'edit',
    open: false,
    scrapId: 1
  }
});
