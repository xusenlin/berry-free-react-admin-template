// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://berrydashboard.io" target="_blank" underline="hover">
            berrydashboard.io
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://github.com/xusenlin/marewood" target="_blank" underline="hover">
            &copy; xusenlin/marewood
        </Typography>
    </Stack>
);

export default AuthFooter;
