// assets
import { IconPoint } from '@tabler/icons';

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const tasks = {
    id: 'tasks',
    title: 'Tasks',
    type: 'group',
    children: [
        {
            id: 'tasks1',
            title: 'Test',
            type: 'item',
            url: '/tasks',
            icon: IconPoint
        },
        {
            id: 'tasks2',
            title: 'DevK8s',
            type: 'item',
            url: '/tasks',
            icon: IconPoint
        }
    ]
};

export default tasks;
