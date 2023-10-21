//import ConfirmTest from "components/_common/Confirm/ConfirmTest";
import { createBrowserRouter } from "react-router-dom";
import NavbarLayout from "layout/navbarLayout/NavbarLayout";
import FolderPage from "pages/folderPage/FolderPage";
import MainLayout from "../layout/mainLayout /mainLayout";
import CategoryPage from "../pages/categoryPage/CategoryPage";
const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      {
        element: <FolderPage isMine={true} />,
        path: "/myPage"
      }
    ]
  },
  {
    element: <MainLayout />,
    children: [
      { element: <CategoryPage />, path: "/" },
      { element: <FolderPage isMine={false} />, path: "/user/:userId" }
    ]
  }
]);

export default router;
