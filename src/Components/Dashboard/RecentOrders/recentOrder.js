import style from './recentOrder.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const RecentOrder = () => {
    function createData(customer, order, amount, status) {
        return { customer, order, amount, status };
      }
      
      const rows = [
        createData('Wade Warren', 15478256, '$124.00', 'Delivered'),
        createData('Jane Copper', 48965786, '$365.02', 'Delivered'),
        createData('Guy Hawkins', 78958215, '$45.88', 'Cancelled'),
        createData('Kristin Watson', 20965732, '$65.00', 'Pending'),
        createData('Cody Fisher', 95715620, '$545.00', 'Delivered'),
        createData('Savannah Nguyen ', 78514568, '$128.20', 'Delivered'),
      ];
    return (
        <div className={style.recentOrdersContainer}>
            <Typography variant="h4" gutterBottom>Recent Orders</Typography>
            <TableContainer component={Paper} className={style.table}>
            <Table sx={{ minWidth: 650, bgcolor: 'black', color: 'white' }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell sx={{ color: 'white' }} className={style.tableData}>Customer</TableCell>
                    <TableCell sx={{ color: 'white' }} className={style.tableData} align="right">Order No.</TableCell>
                    <TableCell sx={{ color: 'white' }} className={style.tableData} align="right">Amount</TableCell>
                    <TableCell sx={{ color: 'white' }} className={style.tableData} align="right">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.customer}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell sx={{ color: 'white' }} className={style.tableData} component="th" scope="row">
                        {row.customer}
                    </TableCell>
                    <TableCell sx={{ color: 'white' }} className={style.tableData} align="right">{row.order}</TableCell>
                    <TableCell sx={{ color: 'white' }} className={style.tableData} align="right">{row.amount}</TableCell>
                    <TableCell sx={{ color: 'white' }} className={style.tableDataStatus}><div className={row.status==='Delivered'?style.statusGreen:style.statusRed}>{row.status}</div></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default RecentOrder;