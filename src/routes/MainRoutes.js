import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Navigate to={'/dashboard'} />
        },
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'repositories',
            element: <UtilsTypography />
        },
        {
            path: 'categories',
            element: <UtilsColor />
        },
        {
            path: 'users',
            element: <UtilsShadow />
        },
        {
            path: 'tasks/:id',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
