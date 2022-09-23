import { Box, Container, Grid, Typography, Paper } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Banner from '../../public/about/about-banner.jpg'
import AbstractImage from '../../public/shapes/shape2.png'
import AboutSecImage from '../../public/about/about-aboutsec.jpg'
import { SectionalHeading, CoursesCard, BrownFilledButton } from '../../components/components'
import Flower from '../../public/Home/counter/flower.png'
import human from '../../public/Home/counter/human.png'
import msg from '../../public/Home/counter/msg.png'
import smile from '../../public/Home/counter/smile.png'
import CountUp from 'react-countup';
import ImaportanceImage from '../../public/about/importance.jpg'
import W1 from '../../public/about/w-1.png'
import W2 from '../../public/about/w-2.png'
import W3 from '../../public/about/w-3.png'
import W4 from '../../public/about/w-4.png'
import Block1 from '../../public/shapes/block-1.jpg'
import Block2 from '../../public/shapes/block-2.jpg'
import Block3 from '../../public/shapes/block-3.jpg'

const About = () => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()

useEffect(()=>{
  if(typeof window !== undefined){
    setShow(true)
  }else{
    setShow(false)
  }
},[])


useEffect(()=>{
  setWidth(window.innerWidth)
},[width])

  return (
    <>
{
  show ? <>
        <Head>
        <title>Savasa - Yoga & Meditation Elementor Template Kit Preview - ThemeForest</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/about-us/" />
      </Head>
      <main>
        <section>
          <Container maxWidth="xxl" id="abouthero" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(${Banner.src})` }} className="d-flex justify-content-center align-items-center">
            <Box>
              <Typography variant='h1'>About Us</Typography>
            </Box>
          </Container>
        </section>
        <section id="about_aboutSec" style={{ backgroundImage: `linear-gradient(#f4ede6cc, #f4ede6cc),url(${AbstractImage.src})` }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Box>
                          <SectionalHeading subtitle="ABOUT SAVASA" title="Happiness is a decision, not a destination. Realize it with us!" variant="h2" align={width > 800 ? 'left' : 'left'} />
                        </Box>
                        <Typography>Quisque maximus lacus sem, vitae maximus tortor venenatis in. Ut porttitor velit nec nibh dignissim venenatis. Vestibulum non ex id dolor commodo vestibulum. Nulla dignissim quam et augue consectetur porttitor.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image src={AboutSecImage} alt="lady doing yoga" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section id="couterSec" style={{ backgroundImage: `linear-gradient(#f4ede6cc, #f4ede6cc),url(${AbstractImage.src})` }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="d-flex flex-column justify-content-center align-items-center" >
                        <Box style={{ height: "3rem", width: "3rem" }} className="d-flex justify-content-center align-items-center">
                          <img src={smile.src} alt="Flower" className='img-fluid' />
                        </Box>
                        <Box>
                          <Typography variant='h2' align='center' gutterBottom><CountUp end={950} duration={5} /> +</Typography>
                          <Typography className='para' align='center'>Happy Clients</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="d-flex flex-column justify-content-center align-items-center" >
                        <Box style={{ height: "3rem", width: "3rem" }} className="d-flex justify-content-center align-items-center">
                          <img src={Flower.src} alt="Flower" className='img-fluid' />
                        </Box>
                        <Box>
                          <Typography variant='h2' align='center' gutterBottom><CountUp end={12} duration={5} /> +</Typography>
                          <Typography className='para' align='center'>Years Experience</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="d-flex flex-column justify-content-center align-items-center" >
                        <Box style={{ height: "3rem", width: "3rem" }} className="d-flex justify-content-center align-items-center">
                          <img src={human.src} alt="Flower" className='img-fluid' />
                        </Box>
                        <Box>
                          <Typography variant='h2' align='center' gutterBottom><CountUp end={115} duration={5} /> +</Typography>
                          <Typography className='para' align='center'>Expert Trainers</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="d-flex flex-column justify-content-center align-items-center" >
                        <Box style={{ height: "3rem", width: "3rem" }} className="d-flex justify-content-center align-items-center">
                          <img src={msg.src} alt="Flower" className='img-fluid' />
                        </Box>
                        <Box>
                          <Typography variant='h2' align='center' gutterBottom><CountUp end={54} duration={5} /> +</Typography>
                          <Typography className='para' align='center'>Total Branch</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={width < 600 ? 5 : 10}>
                  <Box mb={5} data-aos="fade-up">
                    <SectionalHeading title="Let go of stress and anxiety" variant="h2" subtitle="OUR COURSES" align='center' />
                  </Box>
                  <CoursesCard />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section style={{ backgroundColor: "#f4ede6cc" }} id="importanceSec">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={10}>
                  <Box>
                    <SectionalHeading align="center" subtitle="WHAT WE DO" title="The importance of doing yoga" variant="h2" />
                    <Typography align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                  </Box>
                  <Box mt={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Box component={Paper} className='shadow'>
                          <Image src={ImaportanceImage} alt="Girl doing yoga" />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Box p={4} component={Paper} className="shadow imp" style={{ backgroundImage: `url(${Block1.src})` }}>
                          <Box className="d-flex justify-content-center align-items-center">
                            <Image src={W1} alt="Yoga" />
                          </Box>
                          <Box mt={3}>
                            <Typography variant="h3" align='center' gutterBottom>Weight Loss</Typography>
                            <Typography className="para" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</Typography>
                            <Box mt={3} className="d-flex justify-content-center align-items-center">
                              <BrownFilledButton navlink={true} btnLink="/" btnTitle="READ MORE" />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Box p={4} component={Paper} className="shadow imp" style={{ backgroundImage: `url(${Block2.src})` }}>
                          <Box className="d-flex justify-content-center align-items-center">
                            <Image src={W2} alt="Yoga" />
                          </Box>
                          <Box mt={3}>
                            <Typography variant="h3" align='center' className="text-white" gutterBottom>Weight Loss</Typography>
                            <Typography className="para text-white" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</Typography>
                            <Box mt={3} className="d-flex justify-content-center align-items-center">
                              <BrownFilledButton navlink={true} btnLink="/" btnTitle="READ MORE" />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Box p={4} component={Paper} className="shadow imp" style={{ backgroundImage: `url(${Block3.src})` }}>
                          <Box className="d-flex justify-content-center align-items-center">
                            <Image src={W3} alt="Yoga" />
                          </Box>
                          <Box mt={3}>
                            <Typography variant="h3" align='center' gutterBottom>Weight Loss</Typography>
                            <Typography className="para" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</Typography>
                            <Box mt={3} className="d-flex justify-content-center align-items-center">
                              <BrownFilledButton navlink={true} btnLink="/" btnTitle="READ MORE" />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Box p={4} component={Paper} className="shadow imp" style={{ backgroundImage: `url(${Block3.src})` }}>
                          <Box className="d-flex justify-content-center align-items-center">
                            <Image src={W4} alt="Yoga" />
                          </Box>
                          <Box mt={3}>
                            <Typography variant="h3" align='center' gutterBottom>Weight Loss</Typography>
                            <Typography className="para" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</Typography>
                            <Box mt={3} className="d-flex justify-content-center align-items-center">
                              <BrownFilledButton navlink={true} btnLink="/" btnTitle="READ MORE" />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
  </> : null
}
    </>
  )
}

export default About