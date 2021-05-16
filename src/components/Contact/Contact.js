import { Typography } from '@material-ui/core'
import React from 'react'
import { contactInfo } from '../../data/portfolio.data';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Contact() {
    return (
        <div>
            <Typography variant="h4">{contactInfo.title}</Typography>
            <Typography variant="h5" style={{textTransform:'uppercase'}}>{contactInfo.subtitle}</Typography>
            <Typography component="a"  href={"tel:" + contactInfo.number} variant="h6">{contactInfo.number}</Typography>
            <br/>
            <Typography component="a" href={"mailto:" + contactInfo.email_address} variant="h6">{contactInfo.email_address}</Typography>

            <SocialMedia/>

        </div>
    )
}
