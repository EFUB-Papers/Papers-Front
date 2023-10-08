import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from '../layout/navbarLayout';
import MyPage from '../pages/myPage';

const router = createBrowserRouter([
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
