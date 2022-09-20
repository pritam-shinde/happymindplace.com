import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Course1 from '../../public/course/course-1.jpg'
import Course2 from '../../public/course/course-2.jpg'
import { BrownFilledButton } from '../components'

const CoursesCard = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="xxl" style={{position:"relative"}} className='animate__animated animate__fadeInUp'>
                        <Box>
                            <Image src={Course1} alt="course1" />
                        </Box>
                        <Box p={3} className='mx-auto courseDetails' style={{display:"block", width:"90%"}}>
                            <Typography variant='h3' align="center" className='text-white' gutterBottom>Asana Yoga</Typography>
                            <Typography className='para text-white'  align="center"  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</Typography>
                            <Box mt={2} className="d-flex justify-content-center align-items-center">
                                <BrownFilledButton navlink={true} btnLink="/" btnTitle="Read More" />
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="xxl" style={{position:"relative"}} className='animate__animated animate__fadeInUp'>
                        <Box>
                            <Image src={Course2} alt="course1" />
                        </Box>
                        <Box p={3} className='mx-auto courseDetails' style={{display:"block", width:"90%"}}>
                            <Typography variant='h3' align="center" className='text-white' gutterBottom>Meditation</Typography>
                            <Typography className='para text-white'  align="center"  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</Typography>
                            <Box mt={2} className="d-flex justify-content-center align-items-center">
                                <BrownFilledButton navlink={true} btnLink="/" btnTitle="Read More" />
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

export default CoursesCard