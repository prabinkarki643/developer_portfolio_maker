import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { educationInfo } from "../../data/portfolio.data";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
  },
  inline: {
    display: "inline",
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {educationInfo.schools.map((school, index) => {
        return (
          <>
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar style={{}} alt={school.schoolName} src={school.logo} />
              </ListItemAvatar>
              <ListItemText
                primary={<b>{school.schoolName} {school.link && <IconButton edge="end" aria-label="openinnew" target="_blank" href={school.link}>
                <OpenInNewIcon />
              </IconButton>}</b>}
                primaryTypographyProps={{
                  variant:"h5"
                }}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="h6"
                      className={classes.inline}
                      //   color="textPrimary"
                    >
                      {school.degree}
                    </Typography>
                    {school.desc && ` — ${school.desc}`}
                    <Typography>{school.duration}</Typography>
                    
                  </React.Fragment>
                }
              />

              {/* <ListItemSecondaryAction>
               {school.link && <IconButton edge="end" aria-label="openinnew" target="_blank" href={school.link}>
                  <OpenInNewIcon />
                </IconButton>}
              </ListItemSecondaryAction> */}
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}
