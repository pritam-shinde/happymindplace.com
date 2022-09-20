import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const SectionalHeading = ({subtitle, variant, title, align}) => {
  return (
    <>
    <Box my={1} className={`d-flex flex-column ${align == "center" ? 'align-items-center' : align == 'left' ? 'align-items-start' : align == 'right' ? 'align-items-end' : null }`}>
        {
            subtitle ? <Divider className='subtitle'>{subtitle}</Divider> : null
        }
        {
            title ? <Typography variant={variant} align={align}>{title}</Typography> : null
        }
    </Box>
    </>
  )
}

export default SectionalHeading