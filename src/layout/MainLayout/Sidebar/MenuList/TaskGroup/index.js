// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { IconPoint } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN, SET_MENU } from '../../../../../store/actions';
import { Link } from 'react-router-dom';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const TaskGroup = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const category = useSelector((state) => state.category);

    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const itemHandler = (id) => {
        dispatch({ type: MENU_OPEN, id: 'tasks/' + id });
        if (matchesSM) dispatch({ type: SET_MENU, opened: false });
    };
    // menu list collapse & items
    const items = category.map((menu) => (
        <ListItemButton
            key={menu.ID}
            component={Link}
            to={`tasks/${menu.ID}`}
            sx={{
                borderRadius: `${customization.borderRadius}px`,
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor: 'inherit',
                py: 1.25,
                pl: `24px`
            }}
            selected={customization.isOpen.findIndex((id) => id === 'tasks/' + menu.ID) > -1}
            onClick={() => itemHandler(menu.ID)}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: 36 }}>{<IconPoint />}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant={'h5'} color="inherit">
                        {menu.Name}
                    </Typography>
                }
            />
        </ListItemButton>
    ));

    return (
        <>
            <List
                subheader={
                    <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
                        Task
                    </Typography>
                }
            >
                {items}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

export default TaskGroup;
