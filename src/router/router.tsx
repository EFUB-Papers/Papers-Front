import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/navbarLayout/NavbarLayout';
import FolderPage from 'pages/folderPage/FolderPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import HeaderLayout from 'layout/headerLayout/HeaderLayout';
import MainPage from 'pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ScrapWritePage from 'pages/ScrapWritePage/ScrapWritePage';

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

      { element: <CategoryPage />, path: '/category/:categoryId' },
      { element: <SearchPage />, path: '/search' },
      { element: <DetailPage />, path: '/detail' }
    ]
  },
  { element: <ScrapWritePage />, path: '/scrap-write' }
]);

export default router;
