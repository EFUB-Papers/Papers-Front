import { UserType } from 'types/UserType';
import { MyFolderType } from '../types/FolderType';

export const UserMock: UserType = {
  nickname: '나는 고양이다',
  userDetail: '고양이는 빠른 반사신경, 탁월한 유연성이 있다.',
  imgUrl:
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRT3pf2ui5C-iQmk56kvTqMd6kinKqEoHbHItP7Jyq6XHzXWR-j'
};

export const userListMock: UserType[] = [
  UserMock,
  UserMock,
  UserMock,
  UserMock,
  UserMock
];

export const MyFolderMock: MyFolderType[] = [
  { folderId: 1, folderName: '기본 폴더' },
  { folderId: 2, folderName: '전국 맛집 탐방' },
  { folderId: 3, folderName: '프론트엔드 노트' },
  { folderId: 4, folderName: '백엔드 노트' },
  { folderId: 5, folderName: '우리집 강아지' },
  { folderId: 6, folderName: '파리 여행 일기' },
  { folderId: 7, folderName: '글쓰기 노트' },
  { folderId: 8, folderName: '떡볶이 부시기' },
  { folderId: 9, folderName: '고양이 좋아' },
  { folderId: 1, folderName: '기본 폴더' },
  { folderId: 2, folderName: '전국 맛집 탐방' },
  { folderId: 3, folderName: '프론트엔드 노트' }
];
