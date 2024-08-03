import style from './dashboard.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FaFirstOrder } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { BsFileBarGraphFill } from "react-icons/bs";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    const renderBoxCollection = () => {
        return (
            <div className={style.boxCollectionContainer}>
                <div className={style.boxCollectionItem}>
                    <div className={style.boxCollectionItemIcon1}><FaFirstOrder /></div>
                    <Typography variant="body1" gutterBottom>
                        Total Orders
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainer}>
                        <Typography variant="h4" gutterBottom>
                            75
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageUp}>
                            <ArrowDropUpIcon />
                            3%
                        </Typography>
                    </div>
                </div>
                <div className={style.boxCollectionItem}>
                    <div className={style.boxCollectionItemIcon2}><FaShoppingBag /></div>
                    <Typography variant="body1" gutterBottom>
                        Total Delivered
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainer}>
                        <Typography variant="h4" gutterBottom>
                            70
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageDown}>
                            <ArrowDropDownIcon />
                            3%
                        </Typography>
                    </div>
                </div>
                <div className={style.boxCollectionItem}>
                    <div className={style.boxCollectionItemIcon3}><FaShoppingBag /></div>
                    <Typography variant="body1" gutterBottom>
                        Total Cancelled
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainer}>
                        <Typography variant="h4" gutterBottom>
                            5
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageUp}>
                            <ArrowDropUpIcon />
                            3%
                        </Typography>
                    </div>
                </div>
                <div className={style.boxCollectionItem}>
                    <div className={style.boxCollectionItemIcon4}><BsFileBarGraphFill /></div>
                    <Typography variant="body1" gutterBottom>
                        Total Revenue
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainer}>
                        <Typography variant="h4" gutterBottom>
                            $12k
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageDown}>
                            <ArrowDropDownIcon />
                            3%
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
    const renderNewProfit = () => {
        return (
            <div className={style.netProfitContainer}>
                <div className={style.netProfitContainerText}>
                    <Typography variant="body1" gutterBottom>
                        Net Profit
                    </Typography><br/>
                    <Typography variant="h3" gutterBottom>
                        $6759.25
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom className={style.netProfitContainerPercentageUp}>
                        <ArrowDropUpIcon />
                        3%
                    </Typography>
                </div>
                <div className={style.netProfitContainerProgressContainer}>
                    <CircularProgressbar value={70} text='70%' className={style.netProfitContainerProgressContainerBar}/>
                    <Typography variant="caption" gutterBottom>
                        *The values has been rounded off
                    </Typography>
                </div>
            </div>
        );
    }
    return (
        <div className={style.mainContainer}>
            <Typography variant="h3" gutterBottom>Dashboard</Typography>
            <Grid container className={style.container}>
                <Grid item md={7} xs={12} className={style.items}>
                    {renderBoxCollection()}
                </Grid>
                <Grid item md={5} xs={12} className={style.items}>
                    {renderNewProfit()}
                </Grid>
                <Grid item md={8} xs={12} className={style.items}>
                    <div>Hi</div>
                </Grid>
                <Grid item md={4} xs={12} className={style.items}>
                    <div>Hi</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;