import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllColleges from "../Pages/AllColleges/AllColleges";
import Admissions from "../Pages/Admissions/Admissions";
import AdmissionForm from "../components/AdmissionForm/AdmissionForm";
import CollegeDetails from "../components/CollegeDetails/CollegeDetails";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <AllColleges />,
      },
      {
        path: "/college/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "admission",
        element: <Admissions />,
      },
      {
        path: "/admission-form/:id",
        element: (
          <PrivateRoute>
            <AdmissionForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
