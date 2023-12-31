import { atom } from 'recoil';

export const folderModalAtom = atom({
  key: 'folderModal',
  default: {
    option: 'edit',
    open: false,
    scrapId: 1,
    folderId: -1,
    defaultFolderId: -1
  }
});

export const userModalAtom = atom({
  key: 'userModal',
  default: false
});
