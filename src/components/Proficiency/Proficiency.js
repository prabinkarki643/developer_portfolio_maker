import React from "react";
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography,makeStyles } from "@material-ui/core";
import { proficiency } from "../../data/portfolio.data";
import SkillsInProgressBar from "../SoftwareSkill/SkillsInProgressBar";

export default function Proficiency() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <img
            alt="Prabin Working"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={proficiency.featureImg}
          ></img>
        </Grid>
        <Grid item xs={12} md={8}>
          <SkillsInProgressBar/>
        </Grid>
      </Grid>
    </div>
  );
}
