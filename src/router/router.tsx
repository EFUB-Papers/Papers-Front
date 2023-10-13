import UserCard from 'components/_common/UserCard/UserCard';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from '../layout/navbarLayout';
import MyPage from '../pages/myPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserCard
        width={280}
        userId={0}
        imgurl="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
        nickname="Jamie0829"
        introduction="이것은 "
      />
    )
  },
  {
    element: <NavbarLayout />,
    children: [
      {
        element: <MyPage />,
        path: '/myPage'
      }
    ]
  }
]);

export default router;
