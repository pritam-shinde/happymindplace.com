import { Container } from '@mui/material'
import React from 'react'
import Styles from '../../../styles/Home.module.css'

const Hero = () => {
  return (
    <>
    <Container maxWidth="xxl" className={`${Styles.hero}`}></Container>
    </>
  )
}

export default Hero