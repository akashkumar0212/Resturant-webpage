import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from "../data/data"

const Menu = () => {
    return (
        <Layout>
        <Box>
        <Typography sx={{bgcolor: "black", color: 'white' ,justifyContent: 'center', textAlign: "center", fontSize: 40, fontWeight: 'bold' }}> Menu</Typography>
        </Box>
            <Box sx={{ display: 'flex', m: 2, flexWrap: 'wrap', justifyContent:'center'}}>
                {MenuList.map(menu => (
                    <Card sx={{width: "390px", display:'flex', m:2}}>
                        <CardActionArea>
                            <CardMedia
                                sx={{minHeight: "400px"}}
                                component={"img"}
                                src={menu.image}
                                alt={menu.name}
                                 />
                                 <CardContent>
                                    <Typography variant='h4' gutterBottom component={'div'}>
                                        {menu.name}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {menu.desc}
                                    </Typography>
                                    <Typography>
                                        {menu.price}
                                    </Typography>
                                 </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Layout>
    )
}

export default Menu
