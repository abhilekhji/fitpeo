import style from './header.module.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const Header = () => {
    const renderSearchInput = () => (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
            />
        </Paper>
    )
    return (
        <div className={style.container}>
            <div>{renderSearchInput()}</div>
            <div>
                <Stack direction="row" spacing={2}>
                    <Avatar><MailOutlineIcon /></Avatar>
                    <Avatar><SettingsIcon/></Avatar>
                    <Avatar><NotificationsNoneIcon/></Avatar>
                    <Avatar src="https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/313441527_8170766786327151_1292522334208123146_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CxdpVydePo0Q7kNvgFh1nCc&_nc_ht=scontent.fgau1-5.fna&oh=00_AYCWMlK1oE3l9ZmZuclOu-idfAgsqlyFW8TLy4CCE0OkoA&oe=66B38648"></Avatar>
                </Stack>
            </div>
        </div>
    )
}

export default Header;