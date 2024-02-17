import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home';
import ArticlesPage from './pages/articles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/articles',
    element: <ArticlesPage />
  },
]);

const App = () => {
  return (
    <div className="font-opensans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;