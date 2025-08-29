import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/homepage/HomePage';
import BookingPage from './pages/BookingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // more children
    ],
  },
  {
    path: '/book',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BookingPage />,
      },
      // more children
    ],
  },
]);

export default router;
