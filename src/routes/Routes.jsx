import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Friend from "../pages/friendpage/Friend";
import FriendsDetails from "../pages/friendsDetails/FriendsDetails";

export const router = createBrowserRouter ([{
  path: "/",
  Component: MainLayout,
  children: [
    {
      index: true,
      element: <Homepage />,
    },
    {
      path: "/friendpage",
      element: <Friend />,
    },
    {
        path: "/friendsDetails/:id",
        Component: FriendsDetails,
    }
  ],
  errorElement: <ErrorPage />,
}]);