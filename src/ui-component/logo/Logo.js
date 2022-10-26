// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <Box component="span" sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.5926 99.2841">
                <path
                    fill={theme.palette.secondary.main}
                    d="M104.4756,67.533v-13.78a2,2,0,0,0-2-2h-84a2,2,0,0,0-2,2V67.3573c0,1.7735-.0317,18.7616-.0383,22.2665a1.9715,1.9715,0,0,0,.3608,1.1457c1.0679,1.5193,4.2463,6.0392,6.0988,8.6542a2,2,0,0,0,1.6214.8291h9.0845a2,2,0,0,0,1.6913-.9326l1.6629-2.6348a2,2,0,0,1,1.6914-.9326h43.694a2,2,0,0,1,1.7.9461l1.6168,2.6078a2,2,0,0,0,1.7.9461h9.2706a2,2,0,0,0,1.6247-.8336l5.81-8.0926a1.9887,1.9887,0,0,0,.3754-1.1593C104.4459,86.6082,104.4756,69.3037,104.4756,67.533Z"
                    transform="translate(-1.1793 -0.9687)"
                />
                <rect fill={theme.palette.secondary.main} x="103.7963" y="60.5296" width="14.7963" height="24.7034" rx="2" />
                <rect fill={theme.palette.secondary.main} y="60.5296" width="14.7963" height="24.7034" rx="2" />
                <path
                    fill={theme.palette.primary.main}
                    d="M99.4015,19.4593A10.6162,10.6162,0,0,0,88.7853,8.8431h-56.62A10.6162,10.6162,0,0,0,21.55,19.4593V46A1.7693,1.7693,0,0,0,23.319,47.769h3.8631q-.4065,1.7651-.7844,3.53h6.0335c.2119-1.1845.43-2.3547.6432-3.53h53.259l.6826,3.5388h6.467c-.2516-1.1875-.489-2.3607-.7313-3.5388h4.88A1.7693,1.7693,0,0,0,99.4015,46Z"
                    transform="translate(-1.1793 -0.9687)"
                />
                <path
                    fill={theme.palette.success.main}
                    d="M82.2553,1.212l-3.19-.2383a1.762,1.762,0,0,0-1.7479,1.0441q-.7938,1.7964-2.8015,6.3742h10.43Q84.1825,4.4047,83.8623,2.65A1.76,1.76,0,0,0,82.2553,1.212Z"
                    transform="translate(-1.1793 -0.9687)"
                />
                <path
                    fill={theme.palette.success.main}
                    d="M41.7721,1.0746l-3.5545.5144A1.7685,1.7685,0,0,0,36.74,2.9752q-.3513,1.6709-1.1236,5.4168H46.4092q-1.9573-4.437-2.7639-6.2782A1.7663,1.7663,0,0,0,41.7721,1.0746Z"
                    transform="translate(-1.1793 -0.9687)"
                />
                <circle fill="#fff" cx="43.1636" cy="25.1695" r="6.1975" />
                <circle fill="#fff" cx="75.3906" cy="25.1695" r="6.1975" />
                <path
                    fill={theme.palette.secondary.main}
                    d="M52.4183,41.9987q2.1405.3123,4.1689.81l2.0156.459a9.786,9.786,0,0,0,1.8536.2956,9.85,9.85,0,0,0,1.8543-.2933c.6686-.13,1.33-.3247,2.0188-.4494l2.0524-.4635c.7052-.1079,1.39-.2783,2.1127-.3584l.0134-.0015a.0491.0491,0,0,1,.0237.0943q-1.96.787-3.96,1.466a17.7545,17.7545,0,0,1-4.1156,1.0052,17.7278,17.7278,0,0,1-4.1156-1.0051q-2.001-.6773-3.96-1.4661a.0493.0493,0,0,1,.0255-.0945Z"
                    transform="translate(-1.1793 -0.9687)"
                />
            </svg>
            <Typography sx={{ marginLeft: '10px' }} variant="h3" color="secondary" align="center">
                MareWood
            </Typography>
        </Box>
    );
};

export default Logo;
