
import {Box, Typography, Table, TableHead, TableRow, TableBody, TableCell, Button } from '@mui/material';

const Users = () => {
    return (
        <Box>
            <Typography variant="h4"> Eployee </Typography>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Remove Entry</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>01</TableCell>
                            <TableCell>Pratik</TableCell>
                            <TableCell>Cloud Engineer</TableCell>
                            <TableCell>rautpr2990@gmail.com</TableCell>
                            <TableCell>8087732990</TableCell>
                            <TableCell>70000</TableCell>
                            <TableCell><Button variant="contained">Remove</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Box>
    )
}
    export default Users;