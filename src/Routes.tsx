import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts/:postNumber',
        element: <Post />,
      },
    ],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
