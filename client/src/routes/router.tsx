import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        index: true,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
