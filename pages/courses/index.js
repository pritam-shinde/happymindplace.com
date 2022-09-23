import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import {Container, Box, Typography, Grid, TextField, Button} from '@mui/material'
import Banner from '../../public/courses/Banner.jpg'
import { BrownFilledButton, SectionalHeading, CoursesCard } from '../../components/components'
import AbstractImage from '../../public/shapes/shape2.png'
import AbstractImage2 from '../../public/shapes/shape4.png'
import NewsletterSEcBg from '../../public/newsletter/newsletter-bg.jpg'
import NewsletterBg from '../../public/newsletter/snap.jpg'
import CountUp from 'react-countup';
import Flower from '../../public/Home/counter/flower.png'
import human from '../../public/Home/counter/human.png'
import msg from '../../public/Home/counter/msg.png'
import smile from '../../public/Home/counter/smile.png'
import Image from 'next/image'
import courseImage1 from '../../public/courses/course-about-1.jpg'
import courseImage2 from '../../public/courses/course-about-2.jpg'
import courseImage3 from '../../public/courses/course-about-3.jpg'
import courseImage4 from '../../public/courses/course-about-4.jpg'



const Courses = () => {
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
        <link rel="canonical" href="/" />
      </Head>
      <main>
      <section>
          <Container maxWidth="xxl" id="abouthero" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(${Banner.src})` }} className="d-flex justify-content-center align-items-center">
            <Box>
              <Typography variant='h1'>Courses Available</Typography>
            </Box>
          </Container>
        </section>
        <section>
          <Container maxWidth="xxl" className="bg" style={{backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(${AbstractImage.src})`, backgroundAttachment:"fixed"}}>
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={width < 600 ? 5 : 10}  >
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading subtitle="COURSES" title="Get the best course at our Savasa Yoga" align="left" variant="h2" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Typography className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie. Nam ut lectus lobortis lorem fermentum mollis sed sit amet lectus.</Typography>
                        <Box mt={3} >
                          <BrownFilledButton navlink={true} btnLink="/" btnTitle="JOIN OUR COURSES" />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section style={{backgroundColor:"#f4ede6"}}>
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
        <section id="newsletterSec" style={{backgroundImage:`url(${NewsletterSEcBg.src})`}}>
          <Container maxWidth="xxl" style={{ height: "100%" }}>
            <Box py={5} style={{ height: "100%" }}>
              <Grid container style={{ height: "100%" }}>
                <Grid item xs='10' className='mx-auto d-flex align-items-center'>
                  <Box p={5} id="newsletter" style={{backgroundImage:`url(${NewsletterBg.src})`}}>
                    <Grid container>
                      <Grid item xs={12} md={10} lg={8} className="mx-auto">
                        <Box>
                          <SectionalHeading title="Become a Member" variant="h2" align="center" />
                          <Typography className="para text-white" align="center">Quisque maximus lacus sem, vitae maximus tortor venenatis in. Ut porttitor velit nec nibh dignissim venenatis. Vestibulum non ex id dolor commodo vestibulum. Nulla dignissim quam et augue consectetur porttitor.</Typography>
                          <Box mt={3} className="d-flex justify-content-center alig-items-center">
                            <BrownFilledButton navlink={true} btnLink="/" btnTitle="JOIN US NOW" />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
        <Box id="couterSec" style={{backgroundImage:`linear-gradient(#f4ede65c, #f4ede65c),url(${AbstractImage2.src})`}}>
        <section >
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={10}>
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
                <Box py={5}>
                  <Grid container>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Box>
                            <SectionalHeading subtitle="OUR STUDIO" title="Visit us to know more about us" align="left" variant="h2" />
                          </Box>
                          <Typography className='para'>Quisque maximus lacus sem, vitae maximus tortor venenatis in. Ut porttitor velit nec nibh dignissim venenatis. Vestibulum non ex id dolor commodo vestibulum. </Typography>
                          <Box mt={3}>
                          <BrownFilledButton navlink={true} btnLink="/" btnTitle="JOIN US NOW" />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Image src={courseImage1} alt="yoga" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Image src={courseImage2} alt="yoga" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Image src={courseImage3} alt="yoga" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Image src={courseImage4} alt="yoga" />
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section style={{backgroundColor:"#f4ede6"}}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Box>
                        <SectionalHeading subtitle="OUR CONTACT" title="Get in touch with us" align="left" variant="h2" />
                        </Box>
                        <Typography className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                        <Box mt={3}>
                          </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <form>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <TextField type="text" fullWidth variant='outlined' label="First Name" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField type="text" fullWidth variant='outlined' label="Last Name" />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField type="email" fullWidth variant='outlined' label="Email" />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField type="text" multiline rows={4} fullWidth variant='outlined' label="Message" />
                            </Grid>
                            <Grid item xs={12} className="d-flex justify-content-center">
                              <Button className='brownFilledButton text-white'>SEND Message</Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        </Box>
      </main>
        </> : null
      }
    </>
  )
}

export default Courses