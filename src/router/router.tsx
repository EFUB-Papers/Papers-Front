import ConfirmTest from 'components/_common/Confirm/ConfirmTest';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/navbarLayout/NavbarLayout';
import MyFolderPage from 'pages/myFolderPage/MyFolderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConfirmTest />
  },
  {
    element: <NavbarLayout />,
    children: [
      {
        element: <MyFolderPage />,
        path: '/myPage/:userId'
      },
      {}
    ]
  }
]);

export default router;
