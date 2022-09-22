import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { BrownFilledButton, CoursesCard, SectionalHeading } from '../components/components'
import Flower from '../public/Home/counter/flower.png'
import human from '../public/Home/counter/human.png'
import msg from '../public/Home/counter/msg.png'
import smile from '../public/Home/counter/smile.png'
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import AbstractBg from '../public/shapes/shape2.png'
import NewsletterSEcBg from '../public/newsletter/newsletter-bg.jpg'
import NewsletterBg from '../public/newsletter/snap.jpg'
import {ArrowRightAlt} from '@mui/icons-material'
import Styles from '../styles/Home.module.css'

const Home = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <title>Savasa - Yoga & Meditation Elementor Template Kit Preview - ThemeForest</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/" />
      </Head>
      <main>
        <section>
        <Container maxWidth="xxl" className={`${Styles.hero}`}>
      <Grid container style={{height:"inherit"}}>
        <Grid item xs={12} md={10} className="mx-auto" style={{height:"inherit"}}>
          <Box style={{height:"inherit"}}>
            <Grid container style={{height:"inherit"}}>
              <Grid item xs={12} sm={6} style={{height:"inherit"}} className="d-flex align-items-center">
                <Box data-aos="fade-up">
                <Divider className='subtitle' data-aos="fade-up">SAVASA YOGA</Divider>
                <Typography variant='h1' gutterBottom data-aos="fade-up">Bend your mind, <br /> inspire yourself</Typography>
                <Typography className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                <Box mt={4} data-aos="fade-up">
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
        </section>
        <section style={{ backgroundColor: "var(--e-global-color-secondary)" }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={width < 600 ? 5 : 10}>
                  <Grid container>
                    <Grid item xs={12} md={8} className="mx-auto">
                      <Box data-aos="fade-up">
                        <SectionalHeading title="Happiness is a decision, not a destination. Realize it with us!" variant="h2" subtitle="ABOUT SAVASA" align='center' />
                        <Typography className='para' align="center" data-aos="fade-up">Quisque maximus lacus sem, vitae maximus tortor venenatis in. Ut porttitor velit nec nibh dignissim venenatis. Vestibulum non ex id dolor commodo vestibulum. Nulla dignissim quam et augue consectetur porttitor. Nulla dignissim quam et augue consectetur porttitor.</Typography>
                        <Box mt={3} className="d-flex justify-content-center align-items-center" data-aos="fade-up">
                          <BrownFilledButton btnLink="/" btnTitle="Learn More" navlink={true} />
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
        <section id="couterSec" style={{backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(${AbstractBg.src})`}}>
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
        <section className='mt-4' id="newsletterSec" style={{backgroundImage:`url(${NewsletterSEcBg.src})`}}>
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
        <section id="testimonialSec" style={{backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(${AbstractBg.src})`}}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={width > 600 ? 10 : 5}>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper px-3 py-5  p-md-5"
                  >
                    <SwiperSlide>
                      <Box className="d-flex flex-column align-items-center">
                        <Typography align="center" className="testimonialSecPara" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis arcu ut felis pulvinar, et tincidunt metus gravida. In congue hendrerit semper. Vestibulum consectetur felis eu facilisis ultrices.</Typography>
                        <Divider className='subtitle'>Meidi Spark</Divider>
                        <Typography>Client</Typography>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="d-flex flex-column align-items-center">
                        <Typography align="center" className="testimonialSecPara" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis arcu ut felis pulvinar, et tincidunt metus gravida. In congue hendrerit semper. Vestibulum consectetur felis eu facilisis ultrices.</Typography>
                        <Divider className='subtitle'>Meidi Spark</Divider>
                        <Typography>Client</Typography>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="d-flex flex-column align-items-center">
                        <Typography align="center" className="testimonialSecPara" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis arcu ut felis pulvinar, et tincidunt metus gravida. In congue hendrerit semper. Vestibulum consectetur felis eu facilisis ultrices.</Typography>
                        <Divider className='subtitle'>Meidi Spark</Divider>
                        <Typography>Client</Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home