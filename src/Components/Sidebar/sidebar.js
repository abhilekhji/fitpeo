import style from './sidebar.module.css';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Sidebar = () => {
    return(
        <div className={style.container}>
            <Stack direction="column" spacing={4}>
                <HomeIcon  className={style.icons}/>
                <AssessmentIcon className={style.icons} />
                <EventNoteIcon className={style.icons} />
                <AccountBalanceWalletIcon className={style.icons} />
            </Stack>
        </div>
    )
}

export default Sidebar;