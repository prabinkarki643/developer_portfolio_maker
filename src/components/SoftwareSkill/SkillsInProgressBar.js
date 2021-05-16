import { Typography } from "@material-ui/core";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import { proficiency } from "../../data/portfolio.data";

export default function SkillsInProgressBar() {
  return (
    <div>
      {proficiency.tectStackSkills.map((skill, index) => {
        return (
          <div style={{marginBottom:5}} key={index}>
            <Typography style={{textAlign:'left'}}>{skill.Stack}</Typography>
            <ProgressBar striped variant="success" now={skill.progressPercentage}/>
          </div>
        );
      })}
    </div>
  );
}
