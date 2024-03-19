import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout.jsx';
import { Root } from './Root.jsx';
import { NotFound } from '../utils/NotFound.jsx';
import { ErrorPage } from '../utils/ErrorPage.jsx';
import { Settings } from '../components/pages/Settings/Settings.jsx';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: 'auth',
      //   element: <AuthLayout />, // авторизация
      // },
      {
        path: 'main',
        element: <MainLayout />, //
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);
