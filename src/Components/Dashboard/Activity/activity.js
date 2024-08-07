import style from './activity.module.css';
import { AgCharts } from 'ag-charts-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

const Activity = () => {
    const chartOptions = {
        data: [
            { x: 5, avgTemp: 2.3, y: 4 },
            { x: 10, avgTemp: 6.3, y: 8 },
            { x: 15, avgTemp: 16.2, y: 10 },
            { x: 20, avgTemp: 22.8, y: 15 },
            { x: 25, avgTemp: 14.5, y: 9 },
            { x: 30, avgTemp: 8.9, y: 6 },
            { x: 35, avgTemp: 22.8, y: 15 },
            { x: 40, avgTemp: 14.5, y: 9 },
            { x: 45, avgTemp: 8.9, y: 6 },
        ],
        series: [{ type: 'bar', xKey: 'x', yKey: 'y' }],
        background: {
            fill: "black"
        }
    };
    return(
        <div className={style.activityContainer}>
            <div className={style.activityContainerTextContainer}>
                <Typography variant="h4" gutterBottom>
                    Activity
                </Typography>
                <div className={style.activityContainerTextContainerDropdown}>
                    <div>Weekly</div>
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div>
                <AgCharts options={chartOptions}/>
            </div>
        </div>
    )
}

export default Activity;