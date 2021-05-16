import React from "react";
// import profile from "../../assets/images/prabin.png";
import styled from "styled-components";
import RGlassCard from "../common/RGlassCard";
import { Button, Grid } from "@material-ui/core";
import SocialMedia from "../SocialMedia/SocialMedia";
import { greeting,appLogo } from "../../data/portfolio.data";
import { Flip } from "react-reveal";

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid white;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-height: 1.5;
  color: white;
  font-weight: bold;
  letter-spacing: 1.5;
  font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
  line-height: 1.5;
  color: white;
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 20px;
`;

export default function Greeting() {
  return (
    <Grid container>
        <Grid item md={12} xs={12}>
         
      <RGlassCard
        containerStyle={{ margin: 10 }}
        className="shadow-lg"
        animated={false}
      >
         <Flip top duration={4000} distance="20px">
           <img src={appLogo} style={{width:'70px',position:'absolute',top:5,left:0,right:0,marginLeft:'auto',marginRight:'auto'}}/>
        <StyledImg src={greeting.profileImage} className="shadow-lg"/>
        <StyledH1>
          <b>{greeting.title}</b>
        </StyledH1>
        <StyledH3 style={{ maxWidth: "300px" }}><b>{greeting.subTitle}</b></StyledH3>
        <div>
          <SocialMedia />
        </div>

        <Button
          variant="contained"
          color="secondary"
          href={greeting.resumeLink}
          target="_blank"
        >
          <b>Get Resume</b>
        </Button>
        </Flip>
      </RGlassCard>
      </Grid>
    </Grid>
  );
}
