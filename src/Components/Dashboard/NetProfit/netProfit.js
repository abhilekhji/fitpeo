import style from './netProfit.module.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import Typography from '@mui/material/Typography';
import 'react-circular-progressbar/dist/styles.css';

const NetProfit = () => {
    return (
        <div className={style.netProfitContainer}>
            <div className={style.netProfitContainerText}>
                <Typography variant="body1" gutterBottom>
                    Net Profit
                </Typography><br/>
                <Typography variant="h4" gutterBottom>
                    $6759.25
                </Typography>
                <div className={style.netProfitContainerPercentageUp}>
                    <ArrowDropUpIcon />
                    3%
                </div>
            </div>
            <div className={style.netProfitContainerProgressContainer}>
                <CircularProgressbar value={70} text='70%' className={style.netProfitContainerProgressContainerBar}/>
                <Typography variant="caption" gutterBottom className={style.hideValue}>
                    *The values has been rounded off
                </Typography>
            </div>
        </div>
    );
}

export default NetProfit;