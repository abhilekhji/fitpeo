import style from './options.module.css';
import { ImTarget } from "react-icons/im";
import { GiHamburger } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';

const Options = () => {
    return (
        <div className={style.optionsContainer}>
            <div className={style.optionsContainerItems}>
                <div className={style.optionsContainerItemsFirstContainer}>
                    <div className={style.optionsContainerItemsIcon}><ImTarget/></div>
                    <Typography variant="overline" gutterBottom>Goals</Typography>
                </div>
                <div className={style.optionsContainerItemsRightIcon}><ChevronRightIcon /></div>
            </div>
            <div className={style.optionsContainerItems}>
                <div className={style.optionsContainerItemsFirstContainer}>
                    <div className={style.optionsContainerItemsIcon}><GiHamburger/></div>
                    <Typography variant="overline" gutterBottom>Popular Dishes</Typography>
                </div>
                <div className={style.optionsContainerItemsRightIcon}><ChevronRightIcon /></div>
            </div>
            <div className={style.optionsContainerItems}>
                <div className={style.optionsContainerItemsFirstContainer}>
                    <div className={style.optionsContainerItemsIcon}><BiSolidDish/></div>
                    <Typography variant="overline" gutterBottom> Menus</Typography>
                </div>
                <div className={style.optionsContainerItemsRightIcon}><ChevronRightIcon /></div>
            </div>
        </div>
    );
}

export default Options;