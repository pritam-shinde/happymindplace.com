import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ArrowRightAlt } from '@mui/icons-material'

const BrownFilledButton = ({ navlink, anchor, btnLink, btnTitle }) => {
    return (
        <>
            <Button className='brownFilledButton'>
                {
                    navlink ? <Link href={btnLink}>
                        <a>{btnTitle}</a>
                    </Link> : null
                }
                {
                    anchor ? <a href={btnLink}>{btnTitle}</a> : null
                }
                <ArrowRightAlt className='text-white ms-3' />
            </Button>
        </>
    )
}

export default BrownFilledButton