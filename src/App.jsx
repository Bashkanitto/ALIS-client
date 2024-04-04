import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
