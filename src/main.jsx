import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Root from './Components/Root';
import ListedBooks from './Components/ListedBooks';
import BookDetails from './Components/BookDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TriangleBarChart from './Components/TriangleBarChart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('fakeData.json')
      },
      {
        path: "/pagesToRead",
        element: <TriangleBarChart></TriangleBarChart>,
        loader: () => fetch('fakeData.json')
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () =>fetch('fakeData.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
