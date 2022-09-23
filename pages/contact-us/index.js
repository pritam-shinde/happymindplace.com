import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material'
import Banner from '../../public/contact/banner.jpg'
import Block1 from '../../public/shapes/block-1.jpg'
import Block2 from '../../public/shapes/block-2.jpg'
import { MapOutlined, MailOutline, PhoneOutlined, Map, } from '@mui/icons-material'
import { SectionalHeading } from '../../components/components'


const Contact = () => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])


  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
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
                  <Typography variant='h1'>Our Contact</Typography>
                </Box>
              </Container>
            </section>
            <section>
              <Container maxWidth="xxl">
                <Grid container>
                  <Grid item xs={12} md={10} className="mx-auto">
                    <Box py={5}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4}>
                          <Box p={5} className='shadow bg' style={{ backgroundImage: `url(${Block1.src})` }}>
                            <Box className='d-flex justify-content-center align-items-center'>
                              <MapOutlined style={{ fontSize: "3rem", color: "#513125" }} />
                            </Box>
                            <Box mt={2}>
                              <Typography variant="h3" align='center' gutterBottom>Address</Typography>
                              <Typography className="para" align="center">140 Hope Street, Plano
                                Los Angeles</Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                        <Box p={5} className='shadow bg' style={{ backgroundImage: `url(${Block2.src})` }}>
                            <Box className='d-flex justify-content-center align-items-center'>
                              <PhoneOutlined style={{ fontSize: "3rem", color: "#fff" }} />
                            </Box>
                            <Box mt={1}>
                              <Typography variant="h3" align='center' className="text-white" gutterBottom>Contact</Typography>
                              <Typography className="para" align="center"><a className="text-white"  href="tel:+1 234 567 890">+1 234 567 890</a></Typography>
                              <Typography className="para" align="center"><a className="text-white"  href="tel:+1 234 567 890">+1 234 567 890</a></Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                        <Box p={5} className='shadow bg' style={{ backgroundImage: `url(${Block1.src})` }}>
                            <Box className='d-flex justify-content-center align-items-center'>
                              <MailOutline style={{ fontSize: "3rem", color: "#513125" }} />
                            </Box>
                            <Box mt={2}>
                              <Typography variant="h3" align='center' gutterBottom>Email</Typography>
                              <Typography className="para" align="center"><a className="text-muted"  href="mailto:savasa@course.com">savasa@course.com</a></Typography>
                              <Typography className="para" align="center"><a className="text-muted"  href="mailto:savasa@yoga.com">savasa@yoga.com</a></Typography>
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
          </main>
        </> : null
      }
    </>
  )
}

export default Contact