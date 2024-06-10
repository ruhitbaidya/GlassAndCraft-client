import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Error from "../Component/Error/Error";
import AllCraft from "../Component/AllCraft/AllCraft";
import AddCraft from "../Component/AddCraft/AddCraft";
import MyCraft from "../Component/MyCraft/MyCraft";
import UpdateCraft from "../Component/UpdateCraft/UpdateCraft";
import ProtectRouter from "../ProtatedRouter/ProcatedRouter";
import CraftDetails from "../Component/CraftDetails/CraftDetails";
import CategoryItems from "../Component/CategoryItem/CategoryItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allcraft",
        element: <AllCraft></AllCraft>,
      },
      {
        path: "/addcraft",
        element: (
          <ProtectRouter>
            <AddCraft></AddCraft>
          </ProtectRouter>
        ),
      },
      {
        path: "/mycraft",
        element: (
          <ProtectRouter>
            <MyCraft></MyCraft>
          </ProtectRouter>
        ),
      },
      {
        path : "/category/:id",
        element : <CategoryItems></CategoryItems>
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://ruhit-server.vercel.app/signalProduct/${params.id}`),
        element: (
          <ProtectRouter>
            <UpdateCraft></UpdateCraft>
          </ProtectRouter>
        ),
      },
      {
        path: "/pagedetails/:id",
        loader: ({ params }) =>
          fetch(`https://ruhit-server.vercel.app/signalProduct/${params.id}`),
        element: (
          <ProtectRouter>
            <CraftDetails></CraftDetails>
          </ProtectRouter>
        ),
      },
    ],
  },
]);

export default router;
