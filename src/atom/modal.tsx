import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const folderEditModal = atom({
  key: 'isfolderEditModalOpen',
  default: false,
  effects_UNSTABLE: [persistAtom]
});
