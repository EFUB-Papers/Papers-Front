import { atom } from 'recoil';

export const folderEditModal = atom({
  key: 'isFolderEditModalOpen',
  default: false
});

export const folderSelectModal = atom({
  key: 'isFolderSelectModalOpen',
  default: false
});
