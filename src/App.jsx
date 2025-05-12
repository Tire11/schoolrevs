import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Pricing from "./pages/Pricing"
import ContactUs from "./pages/ContactUs"
import SecondaryLayout from "./layout/SecondaryLayout"
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "",
      element: <SecondaryLayout />,
      children: [
        {
          path: "/pricing",
          element: <Pricing />
        },
        {
          path: "/school-revs",
          element: <ContactUs />
        }
      ],
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
