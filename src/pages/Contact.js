import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
    return (
        <Layout>
            <Box sx={{
                my: 8,
                ml: 10,
                mr: 10,
                "& h4": {
                    fontWeight: "bold", mb: 2
                }
            }}>
                <Typography variant='h4'>Contact My Resturant</Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur quia adipisci excepturi laborum provident distinctio qui ipsum, suscipit culpa odio sequi non, error veniam, iusto eveniet officiis nostrum nam!</p>
            </Box>
            <Box sx={{m:4, ml:10, width:"600px", "@media (max-width:600px)" :{
                width:"300px",
                ml:4
            }}}>
                <TableContainer component={Paper}>
                    <Table arial-aria-label='contact table'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontSize: "bold", bgcolor: "black", color:"white", textAlign:"center"}}>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 12345 (tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> akash9693kumar@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> +91 7033890007
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact
