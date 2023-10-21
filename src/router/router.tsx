import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/navbarLayout/NavbarLayout';
import MyPage from '../pages/myPage';
import MainPage from 'pages/MainPage/MainPage';
import HeaderLayout from 'layout/headerLayout/HeaderLayout';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      }
    ]
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
