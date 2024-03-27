import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ThemeProvider } from './utils/Theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
