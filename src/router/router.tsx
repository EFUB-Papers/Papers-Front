import ConfirmTest from 'components/_common/Confirm/ConfirmTest';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/navbarLayout/NavbarLayout';
import MyPage from '../pages/myPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConfirmTest />
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
