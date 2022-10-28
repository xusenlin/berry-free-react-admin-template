// assets
import { IconCategory, IconCode, IconDashboard, IconUsers } from '@tabler/icons';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: IconDashboard
        },
        {
            id: 'repositories',
            title: 'Repositories',
            type: 'item',
            url: '/repositories',
            icon: IconCode
        },
        {
            id: 'categories',
            title: 'Categories',
            type: 'item',
            url: '/categories',
            icon: IconCategory
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: IconUsers
        }
    ]
};

export default pages;
