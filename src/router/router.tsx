import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/NavbarLayout/NavbarLayout';
import FolderPage from 'pages/FolderPage/FolderPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import HeaderLayout from 'layout/HeaderLayout/HeaderLayout';
import MainPage from 'pages/MainPage/MainPage';
const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      {
        element: <FolderPage isMine={true} />,
        path: '/myPage'
      },
      { element: <FolderPage isMine={false} />, path: '/user/:userId' }
    ]
  },
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },

      { element: <CategoryPage />, path: '/category' }
    ]
  }
]);

export default router;
