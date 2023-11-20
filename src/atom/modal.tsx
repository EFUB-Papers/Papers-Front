import { atom } from 'recoil';

// export const folderEditModal = atom({
//   key: 'isFolderEditModalOpen',
//   default: false
// });
//
// export const folderSelectModal = atom({
//   key: 'isFolderSelectModalOpen',
//   default: false
// });

// type Edit = {
//   option: 'edit';
//   folderList: OneFolderType[];
// };
//
// type Select = {
//   option: 'select';
//   scrapId: number;
//   folderList: OneFolderType[];
// };
//
// type Add = {
//   option: 'add';
// };
//
// export type FolderType = Edit | Select | Add;

export const folderModalAtom = atom({
  key: 'folderModal',
  default: {
    option: 'edit',
    open: false,
    scrapId: 1
  }
});
