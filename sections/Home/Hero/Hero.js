import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../../styles/Home.module.css'
import { BrownFilledButton } from '../../../components/components'
import {ArrowRightAlt} from '@mui/icons-material'

const Hero = () => {
  return (
    <>
    <Container maxWidth="xxl" className={`${Styles.hero}`}>
      <Grid container style={{height:"inherit"}}>
        <Grid item xs={12} md={10} className="mx-auto" style={{height:"inherit"}}>
          <Box style={{height:"inherit"}}>
            <Grid container style={{height:"inherit"}}>
              <Grid item xs={12} sm={6} style={{height:"inherit"}} className="d-flex align-items-center">
                <Box className='animate__animated animate__fadeInUp'>
                <Divider className='subtitle animate__animated animate__fadeInUp'>SAVASA YOGA</Divider>
                <Typography variant='h1' gutterBottom className='animate__animated animate__fadeInUp'>Bend your mind, <br /> inspire yourself</Typography>
                <Typography className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                <Box mt={4} className='animate__animated animate__fadeInUp'>
                  <BrownFilledButton navlink={true} btnLink="/" btnTitle="Get Started" />
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} style={{height:"inherit"}}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Hero