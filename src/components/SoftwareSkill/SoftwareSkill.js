import React from "react";
import { skillsSection } from "../../data/portfolio.data";
import "./SoftwareSkill.css";
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

export default function SoftwareSkill({containerStyle}) {
  return (
    <Grid container spacing={4} justify="center" style={{marginTop:3,...containerStyle}}>
      {skillsSection.softwareSkills.map(skills => {
            return (
              <Grid className="shadow-sm" item name={skills.skillName} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <i className={skills.fontAwesomeClassname}></i>
                <Typography>{skills.skillName}</Typography>
                </Grid>
            );
          })}
      
    </Grid>
    // <div>
    //   <div>
    //     <ul style={{listStyle:'none',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    //       {skillsSection.softwareSkills.map(skills => {
    //         return (
    //           <li name={skills.skillName} style={{display:'flex',flexDirection:'column',alignItems:'center',margin:10}}>
    //             <i className={skills.fontAwesomeClassname}></i>
    //             <Typography>{skills.skillName}</Typography>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
}