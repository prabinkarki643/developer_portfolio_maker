import React, { useContext } from "react";
import "./WorkExperience.css";
import { Fade } from "react-reveal";
import ExperienceCard from "../common/ExperienceCard/ExperienceCard";
import { workExperiences } from "../../data/portfolio.data";
import { Grid } from "@material-ui/core";
import AdvanceExperienceCard from "../common/ExperienceCard/AdvancedExperienceCard";


export default function WorkExperience() {
 return(
    <div>
    <Grid container spacing={2}>
      {workExperiences.experience.map((card, i) => {
        return (
            <Grid item>
                <AdvanceExperienceCard cardInfo={card}/>
                </Grid>
        )
      })}
    </Grid>
  </div>
 )

  // const isDark=false
  //     return (
  //             <div id="experience">
  //               <Fade bottom duration={1000} distance="20px">
  //                 <div className="experience-container" id="workExperience">
  //                   <div>
  //                     <h1 className="experience-heading">Experiences</h1>
  //                     <div className="experience-cards-div">
  //                       {workExperiences.experience.map((card, i) => {
  //                         return (
  //                           <ExperienceCard
  //                             key={i}
  //                             isDark={isDark}
  //                             cardInfo={{
  //                               company: card.company,
  //                               desc: card.desc,
  //                               date: card.date,
  //                               companylogo: card.companylogo,
  //                               role: card.role,
  //                               descBullets: card.descBullets
  //                             }}
  //                           />
  //                         );
  //                       })}
  //                     </div>
  //                   </div>
  //                 </div>
  //               </Fade>
  //             </div>
  //           );
}
