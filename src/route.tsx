import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home';
import ArticlesPage from './pages/articles';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/articles',
        element: <ArticlesPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
]);

export default router;