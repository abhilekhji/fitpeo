import style from './boxCollection.module.css';
import { FaFirstOrder } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { BsFileBarGraphFill } from "react-icons/bs";
import Typography from '@mui/material/Typography';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Grid from '@mui/material/Grid';

const BoxCollection = () => {
    return (
        // <div className={style.boxCollectionContainer}>
        //     <div className={style.boxCollectionItem}>
        //         <div className={style.boxCollectionItemIcon1}><FaFirstOrder /></div>
        //         <Typography variant="body1" gutterBottom>
        //             Total Orders
        //         </Typography>
        //         <div className={style.boxCollectionItemIconValueContainer}>
        //             <div className={style.boxCollectionNumbers}>
        //                 75
        //             </div>
        //             <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageUp}>
        //                 <ArrowDropUpIcon />
        //                 3%
        //             </Typography>
        //         </div>
        //     </div>
        //     <div className={style.boxCollectionItem}>
        //         <div className={style.boxCollectionItemIcon2}><FaShoppingBag /></div>
        //         <Typography variant="body1" gutterBottom>
        //             Total Delivered
        //         </Typography>
        //         <div className={style.boxCollectionItemIconValueContainer}>
        //             <Typography variant="h4" gutterBottom>
        //                 70
        //             </Typography>
        //             <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageDown}>
        //                 <ArrowDropDownIcon />
        //                 3%
        //             </Typography>
        //         </div>
        //     </div>
        //     <div className={style.boxCollectionItem}>
        //         <div className={style.boxCollectionItemIcon3}><FaShoppingBag /></div>
        //         <Typography variant="body1" gutterBottom>
        //             Total Cancelled
        //         </Typography>
        //         <div className={style.boxCollectionItemIconValueContainer}>
        //             <Typography variant="h4" gutterBottom>
        //                 5
        //             </Typography>
        //             <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageUp}>
        //                 <ArrowDropUpIcon />
        //                 3%
        //             </Typography>
        //         </div>
        //     </div>
        //     <div className={style.boxCollectionItem}>
        //         <div className={style.boxCollectionItemIcon4}><BsFileBarGraphFill /></div>
        //         <Typography variant="body1" gutterBottom>
        //             Total Revenue
        //         </Typography>
        //         <div className={style.boxCollectionItemIconValueContainer}>
        //             <Typography variant="h4" gutterBottom>
        //                 $12k
        //             </Typography>
        //             <Typography variant="overline" display="block" gutterBottom className={style.boxCollectionItemIconValueContainerPercentageDown}>
        //                 <ArrowDropDownIcon />
        //                 3%
        //             </Typography>
        //         </div>
        //     </div>
        // </div>
        <Grid container className={style.boxCollectionContainer}>
            <Grid item xs={12} sm={6} md={3} className={style.boxCollectionItem}>
                <div className={style.boxCollectionItemIcon1}><FaFirstOrder /></div>
                <Typography variant="body1" gutterBottom>
                    Total Orders
                </Typography>
                <div className={style.boxCollectionItemIconValueContainer}>
                    <div className={style.boxCollectionNumbers}>
                        75
                    </div>
                    <div  className={style.boxCollectionItemIconValueContainerPercentageUp}>
                        <ArrowDropUpIcon />
                        3%
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={style.boxCollectionItem}>
                <div className={style.boxCollectionItemIcon2}><FaShoppingBag /></div>
                <Typography variant="body1" gutterBottom>
                    Total Delivered
                </Typography>
                <div className={style.boxCollectionItemIconValueContainer}>
                    <Typography variant="h4" gutterBottom>
                        70
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainerPercentageDown}>
                        <ArrowDropDownIcon />
                        3%
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={style.boxCollectionItem}>
                <div className={style.boxCollectionItemIcon3}><FaShoppingBag /></div>
                <Typography variant="body1" gutterBottom>
                    Total Cancelled
                </Typography>
                <div className={style.boxCollectionItemIconValueContainer}>
                    <Typography variant="h4" gutterBottom>
                        5
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainerPercentageUp}>
                        <ArrowDropUpIcon />
                        3%
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={style.boxCollectionItem}>
                <div className={style.boxCollectionItemIcon4}><BsFileBarGraphFill /></div>
                <Typography variant="body1" gutterBottom>
                    Total Revenue
                </Typography>
                <div className={style.boxCollectionItemIconValueContainer}>
                    <Typography variant="h5" gutterBottom>
                        $12k
                    </Typography>
                    <div className={style.boxCollectionItemIconValueContainerPercentageDown}>
                        <ArrowDropDownIcon />
                        3%
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
export default BoxCollection;