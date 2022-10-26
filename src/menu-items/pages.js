// assets
import { IconCategory, IconCode, IconDashboard, IconUsers } from '@tabler/icons';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'repositories',
            title: 'Repositories',
            type: 'item',
            url: '/dashboard/default',
            icon: IconCode,
            breadcrumbs: false
        },
        {
            id: 'categories',
            title: 'Categories',
            type: 'item',
            url: '/dashboard/default',
            icon: IconCategory,
            breadcrumbs: false
        },
        ,
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/dashboard/default',
            icon: IconUsers,
            breadcrumbs: false
        }
    ]
};

export default pages;
