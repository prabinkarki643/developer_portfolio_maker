import { Grid } from "@material-ui/core";
import React from "react";
import { socialMediaLinks } from "../../data/portfolio.data";
import "./SocialMedia.css";

const styles={
  icon:{
    marginRight: 15,
    color:'grey'
  }
}
export default function SocialMedia({ inlineIconOnly = false }) {
  if (inlineIconOnly) {
    return (
      <Grid container>
        {socialMediaLinks.github && (
          <Grid item>
            <a href={socialMediaLinks.github} target="_blank">
              <i className="fab fa-github" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.linkedin && (
          <Grid item>
            <a href={socialMediaLinks.linkedin} target="_blank">
              <i className="fab fa-linkedin-in" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.gmail && (
          <Grid item>
            <a href={`mailto:${socialMediaLinks.gmail}`} target="_blank">
              <i className="fab fa-google" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.gitlab && (
          <Grid item>
            <a href={socialMediaLinks.gitlab} target="_blank">
              <i className="fab fa-gitlab" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.facebook && (
          <Grid item>
            <a href={socialMediaLinks.facebook} target="_blank">
              <i className="fab fa-facebook-f" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.instagram && (
          <Grid item>
            <a href={socialMediaLinks.instagram} target="_blank">
              <i className="fab fa-instagram" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.twitter && (
          <Grid item>
            <a href={socialMediaLinks.twitter} target="_blank">
              <i className="fab fa-twitter" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.medium && (
          <Grid item>
            <a href={socialMediaLinks.medium} target="_blank">
              <i className="fab fa-medium" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
        {socialMediaLinks.stackoverflow && (
          <Grid item>
            <a href={socialMediaLinks.stackoverflow} target="_blank">
              <i className="fab fa-stack-overflow" style={{...styles.icon}}></i>
            </a>
          </Grid>
        )}
      </Grid>
    );
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
