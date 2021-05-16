import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import { footer } from '../../data/portfolio.data';

export default function Footer() {
    return (
        <div>
            
        <Grid container justify="space-between">
            <Grid item>
                <Typography color="textSecondary">{footer.copyRightText}</Typography>
            </Grid>
            <Grid item>
                <SocialMedia inlineIconOnly={true}/>
            </Grid>
        </Grid>
        <Divider/>
        </div>
    )
}
