import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/home';
import ArticlesPage from './pages/article/articles';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import ArticleDetailPage from './pages/article/articles-detail';

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
    {
        path: '/pricing',
    },
    {
        path: '/faq',
    },
    {
        path: '/blog/:id',
        element: <ArticleDetailPage />
    }
]);

export default router;