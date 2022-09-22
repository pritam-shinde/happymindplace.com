import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Logo/white-logo.png'
import { MapOutlined, MailOutline, PhoneOutlined, } from '@mui/icons-material'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "var(--heading-color) !important" }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={10}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box mb={2}>
                        <img src={Logo.src} alt="logo" style={{ width: "60%" }} />
                      </Box>
                      <Typography className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box mb={3}>
                        <Typography variant='h3' className='text-white'>Quick Links</Typography>
                      </Box>
                      <Box>
                        <List className="p-0 m-0">
                          <ListItem className="p-0 mb-3">
                            <ListItemText primary={<Link href="/about-us/">About Us</Link>} />
                          </ListItem>
                          <ListItem className="p-0 mb-3">
                            <ListItemText primary={<Link href="/courses/">Courses</Link>} />
                          </ListItem>
                          <ListItem className="p-0 mb-3">
                            <ListItemText primary={<Link href="/faq/">FAQ</Link>} />
                          </ListItem>
                          <ListItem className="p-0 mb-3">
                            <ListItemText primary={<Link href="/contact-us/">Contact Us</Link>} />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box mb={3}>
                        <Typography variant='h3' className='text-white'>Get In Touch</Typography>
                      </Box>
                      <Box>
                        <List className="p-0 m-0">
                          <ListItem className="p-0 mb-3">
                            <ListItemIcon>
                              <MapOutlined />
                            </ListItemIcon>
                            <ListItemText primary="140 Hope Street, Plano" />
                          </ListItem>
                          <ListItem className="p-0 mb-3">
                            <ListItemIcon>
                              <MailOutline />
                            </ListItemIcon>
                            <ListItemText primary={<a href="mailto:anymail@mail.com">anymail@mail.com</a>} />
                          </ListItem>
                          <ListItem className="p-0 mb-3">
                            <ListItemIcon>
                              <PhoneOutlined />
                            </ListItemIcon>
                            <ListItemText primary={<a href="tel:+1 234 567 890">+1 234 567 890</a>} />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box mb={3}>
                        <Typography variant='h3' className='text-white'>Location</Typography>
                      </Box>
                      <Box className="ratio ratio-1x1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0345038000787!2d79.06334641440807!3d21.07128409170235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf186a1df55f%3A0xaf33cadda5daef8e!2sNONSTOP%20Crown%20Society%20Water%20Tank!5e0!3m2!1sen!2sin!4v1663827217571!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  )
}

export default Footer