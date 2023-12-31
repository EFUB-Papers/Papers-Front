import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'layout/navbarLayout/NavbarLayout';
import FolderPage from 'pages/FolderPage/FolderPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import HeaderLayout from 'layout/headerLayout/HeaderLayout';
import MainPage from 'pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ScrapWritePage from 'pages/ScrapWritePage/ScrapWritePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ModalLayout from '../layout/ModalLayout/ModalLayout';
import FollowingPage from '../pages/FollowingPage/FollowingPage';
import LikePage from '../pages/LikePage/LikePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPageGuest from 'pages/MainPage/MainPageGuest';

const router = createBrowserRouter([
  {
    element: <AuthPage />,
    path: '/auth'
  },
  {
    path: '/main/guest',
    element: <MainPageGuest />
  },
  { element: <LoginPage />, path: '/' },
  {
    element: <ModalLayout />,
    children: [
      {
        element: <NavbarLayout />,
        children: [
          {
            element: <FolderPage />,
            path: '/folder/:nickname'
          },
          {
            element: <FollowingPage />,
            path: '/following/:nickname'
          },
          {
            element: <LikePage />,
            path: '/like/:nickname'
          }
        ]
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/main',
            element: <MainPage />
          },
          { element: <CategoryPage />, path: '/category/:categoryId' },
          { element: <SearchPage />, path: '/search' },
          { element: <DetailPage />, path: '/detail/:scrapId' }
        ]
      },
      {
        element: <HeaderLayout isWriteButton={false} />,
        children: [{ element: <ScrapWritePage />, path: '/scrap-write' }]
      },
      {
        element: <HeaderLayout isWriteButton={false} />,
        children: [{ element: <ScrapWritePage />, path: '/scrap-edit' }]
      }
    ]
  }
]);

export default router;
