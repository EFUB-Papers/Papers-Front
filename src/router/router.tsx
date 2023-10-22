import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/navbarLayout/NavbarLayout';
import FolderPage from 'pages/folderPage/FolderPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import HeaderLayout from 'layout/headerLayout/HeaderLayout';
import MainPage from 'pages/MainPage/MainPage';
import TagCreator from 'components/_common/TagCreator/TagCreator';
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

      { element: <CategoryPage />, path: '/category' },
      { element: <TagCreator />, path: '/tag-creator' }
    ]
  }
]);

export default router;
