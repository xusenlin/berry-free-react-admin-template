import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import RepoCard from './RepoCard';
import TaskCard from './TaskCard';
import BarChart from './BarChart';
import UserCard from './UserCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <RepoCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <TaskCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <UserCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <BarChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
