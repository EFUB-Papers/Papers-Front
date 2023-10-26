import { UserType } from 'types/UserType';
import { MyFolderType } from '../types/FolderType';

export const UserMock: UserType = {
  userId: 1,
  userName: '나는 고양이다',
  userDetail: '고양이는 빠른 반사신경, 탁월한 유연성이 있다.',
  imgUrl:
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRT3pf2ui5C-iQmk56kvTqMd6kinKqEoHbHItP7Jyq6XHzXWR-j'
};
export const MyFolderMock: MyFolderType[] = [
  { id: 1, title: '기본 폴더' },
  { id: 2, title: '전국 맛집 탐방' },
  { id: 3, title: '프론트엔드 노트' },
  { id: 4, title: '백엔드 노트' },
  { id: 5, title: '우리집 강아지' },
  { id: 6, title: '파리 여행 일기' },
  { id: 7, title: '글쓰기 노트' },
  { id: 8, title: '떡볶이 부시기' },
  { id: 9, title: '고양이 좋아' },
  { id: 1, title: '기본 폴더' },
  { id: 2, title: '전국 맛집 탐방' },
  { id: 3, title: '프론트엔드 노트' }
];
