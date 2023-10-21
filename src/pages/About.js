import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          textAlign:"center",
          my:15,
          "& h4":{
          fontWeight:"bold",
          },
          "& p": {
            textAlign:"justify",
            fontSize: 20,
            padding: 4,
            margin: 1
          },
          "@media (max-width:600px)": {
            mt:1,
            p:1
          }
        }}>
          <Typography variant='h4'>Welcome To My Resturant</Typography>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum unde quasi praesentium error tenetur labore. Cupiditate ullam quam assumenda amet tempore architecto veniam impedit tenetur eius beatae tempora pariatur, fuga incidunt! Assumenda fuga similique asperiores a ut dolorem inventore rem consectetur voluptates saepe quos minima ab iste, sunt, ducimus quis dolorum optio molestias sint labore distinctio. Provident laboriosam laborum magnam odio sunt cupiditate deleniti incidunt voluptas sapiente repellendus amet, iste architecto doloremque! Eos tenetur totam eius nemo molestias est repellendus et atque, explicabo id beatae corrupti, similique eligendi, perferendis aliquid! Eaque non veniam aliquid veritatis excepturi cupiditate molestias natus necessitatibus.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem laudantium rerum labore, pariatur voluptatibus assumenda eaque rem sit ipsum asperiores similique dignissimos recusandae nostrum fuga modi cum facere saepe perspiciatis suscipit voluptas in nam earum! Doloremque minus nobis impedit, perferendis nulla aliquid illo ratione cumque exercitationem, officia eos, excepturi quam id maiores omnis. Itaque assumenda voluptatem ullam facilis perspiciatis ratione officia perferendis libero distinctio minima voluptate necessitatibus quidem modi veritatis, illum magni vero quos quia molestias qui nobis non. Sequi eum est facere. Modi explicabo fugiat iure? Non nam perferendis assumenda vero ut ad deleniti earum nobis perspiciatis minima.</p>
        </Box>
    </Layout>
  )
}

export default About
