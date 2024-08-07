import style from './dashboard.module.css';
import Grid from '@mui/material/Grid';
import BoxCollection from './BoxCollection/boxCollection';
import NetProfit from './NetProfit/netProfit';
import Activity from './Activity/activity';
import Options from './Options/options';
import RecentOrder from './RecentOrders/recentOrder';
import Feedback from './Feedback/feedback';
 
const Dashboard = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.dashboardText}>Dashboard</div>
            <Grid container className={style.container}>
                <Grid item md={7} xs={12} className={style.items}>
                    <BoxCollection />
                </Grid>
                <Grid item md={5} xs={12} className={style.items}>
                    <NetProfit />
                </Grid>
                <Grid item md={7} xs={12} className={style.items}>
                    <Activity />
                </Grid>
                <Grid item md={5} xs={12} className={style.items}>
                    <Options />
                </Grid>
                <Grid item md={7} xs={12} className={style.items}>
                    <RecentOrder />
                </Grid>
                <Grid item md={5} xs={12} className={style.items}>
                    <Feedback />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;