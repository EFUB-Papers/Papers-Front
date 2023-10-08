import SearchBar from 'components/_common/SearchBar/SearchBar';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from '../layout/navbarLayout';
import MyPage from '../pages/myPage';

const router = createBrowserRouter([
  { element: <SearchBar />, path: '/' },
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
