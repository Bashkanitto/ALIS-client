import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout.jsx';
import { Root } from './Root.jsx';
import { NotFound } from '../utils/NotFound.jsx';
import { ErrorPage } from '../utils/ErrorPage.jsx';
import { Editor } from '../components/Editor/Editor.jsx';
import { Settings } from '../components/Settings/Settings.jsx';
import Login from '../components/Auth/Login.jsx';
import Register from '../components/Auth/Registration.jsx';

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
      {
        path: 'login',
        element: <Login />, // авторизация
      },
      {
        path: 'register',
        element: <Register />, // регистрация
      },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/editor',
            index: true,
            element: <Editor />,
          },
          {
            path: '/settings',
            children: [
              {
                index: true,
                element: <Settings />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
