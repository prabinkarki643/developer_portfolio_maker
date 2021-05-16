import React, { useState, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ColorThief from "colorthief";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    textAlign: "left",
  },
  content: {
    minHeight: 250,
  },
  media: {
    // this is the`className` passed to `CardMedia` later
    height: 100, // as an example I am modifying width and height
    width: "33%",
    marginLeft: "33%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function AdvanceExperienceCard({ cardInfo }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }
  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className={"subTitle"}>
            <Typography color="textSecondary">{item}</Typography>
          </li>
        ))
      : null;
  };
  return (
    <Card className={classes.root} elevation={15}>
      <CardHeader
        avatar={
          <Avatar
            alt={cardInfo.company}
            className={`${classes.avatar} shadow`}
            src={cardInfo?.companylogo}
            // aria-label="recipe"
          />
        }
        title={<b>{cardInfo?.company}</b>}
        titleTypographyProps={{
          color: "textSecondary",
          variant: "h5",
          component: "h2",
        }}
        subheader={
          <React.Fragment>
            <Typography variant="subtitle2" color="textSecondary">
              <b>{cardInfo?.role}</b>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {cardInfo?.date}
            </Typography>
          </React.Fragment>
        }
      />
      <CardMedia
        className={classes.media}
        // classes={{media:classes.media.image,root:classes.media.root}}
        title={cardInfo?.company}
        crossOrigin={"anonymous"}
        ref={imgRef}
        image={cardInfo?.companylogo}
        alt={cardInfo?.company}
        onLoad={() => getColorArrays()}
      />
      {/* <div style={{height:200,width:'100%'}}>
          <img 
          crossOrigin={"anonymous"}
          ref={imgRef}
          src={cardInfo?.companylogo}
          alt={cardInfo?.company}
          onLoad={() => getColorArrays()}
          style={{width: "100%",height:'100%',objectFit:'cover'}}
          /> */}

      {/* </div> */}
      <CardContent className={classes.content}>
        <Typography
          style={{ textAlign: "center" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {cardInfo?.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {cardInfo.underDevelopment ? (
          <Button
            size="small"
            variant="contained"
            target="_blank"
            color="primary"
            className="shadow"
          >
            <b>Under Development</b>
          </Button>
        ) : (
          cardInfo?.link && (
            <Button
              size="small"
              variant="contained"
              target="_blank"
              href={cardInfo?.link}
              color="secondary"
              className="shadow"
            >
              <b>View Live</b>
            </Button>
          )
        )}

        {cardInfo?.responsibilitiesBullets && (
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            color="secondary"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" component="h4" color="textSecondary">
            Role & Responsibilities:
          </Typography>
          <ul>
            <GetDescBullets descBullets={cardInfo?.responsibilitiesBullets} />
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
