import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography,makeStyles } from "@material-ui/core";
import React from "react";
import { whatIDo } from "../../data/portfolio.data";
import SoftwareSkill from "../SoftwareSkill/SoftwareSkill";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    icon: {
        minWidth: '20px'
    }
}));

export default function WhatIDo() {
    const classes = useStyles()
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <img
            alt="Prabin Working"
            style={{ width: "100%",height:'100%',objectFit:'cover' }}
            src={whatIDo.featureImg}
          ></img>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography>{whatIDo.intro}</Typography>
          <SoftwareSkill />
          <List dense>
              {whatIDo.skills.map((skills) => {
                return (
                    <ListItem>
                          <ListItemIcon   className={classes.icon}>
                                <FiberManualRecordIcon style={{color:'goldenrod',fontSize:18}}/>
                          </ListItemIcon>
                        <ListItemText primary={skills} />
                    </ListItem>
                );
              })}
            </List>
        </Grid>
      </Grid>
    </div>
  );
}
