import AdminPage from '../pages/AdminPage';
import second from '../pages/EventsList';

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true}
]

export const publicRoutes = [
    {path: '/events', component: <Login/>, exact: true}
]