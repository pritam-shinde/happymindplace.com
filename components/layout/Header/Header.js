import { Box, Container, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Styles from '../../../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <header className={Styles.header}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Navbar</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav mx-auto">
                                            <li className="nav-item">
                                                <Link href="/">
                                                    <a className='nav-link'>Home</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/about-us/">
                                                    <a className='nav-link'>About Us</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/courses/">
                                                    <a className='nav-link'>Course</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/">
                                                    <a className='nav-link'>Store</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/faq/">
                                                    <a className='nav-link'>FAQ</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/contact-us/">
                                                    <a className='nav-link'>Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <Box>

                                        </Box>
                                    </div>
                                </div>
                            </nav>
                        </Grid>
                    </Grid>
                </Container>
            </header>
        </>
    )
}

export default Header