import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Blog from  './blog/Blog.jsx'
import TestBlog from './content/test_blog/test_blog.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/blog",
        element: <Blog />
    }
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
