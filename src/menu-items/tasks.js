// assets
import { IconPoint } from '@tabler/icons';

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const tasks = {
    id: 'tasks',
    title: 'Tasks',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: IconPoint,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/utils/util-color',
            icon: IconPoint,
            breadcrumbs: false
        }
    ]
};

export default tasks;
