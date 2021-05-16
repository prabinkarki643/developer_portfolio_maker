import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import WhatIDo from "../WhatIDo/WhatIDo";
import Proficiency from "../Proficiency/Proficiency";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import WorkExperience from "../WorkExperience/WorkExperience";
import { UnderlineTypographyWithThemeColor } from "../common/UnderlineText";
import { Fade } from "react-reveal";
import { Container } from "@material-ui/core";
import Footer from "../Footer/Footer";
import { blogsLink } from '../../data/portfolio.data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    background: "#c7d2fe66",
    zIndex: 1,
    position: "relative",
    border: "2px solid transparent",
    backgroundClip: "border-box",
    backdropFilter: "blur(30px)",
    webKitBackdropFilter: "blur(30px)",
    justifyContent: "center",
  },
  tabRoot: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
  tabLabel: {
    // backgroundImage: `url(${bgImage})`,
    // WebkitBackgroundClip: "text",
    // color: "transparent",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Girassol",
  },
  titleInTabSection: {
    textTransform: "uppercase",
    // fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Girassol",
    marginBottom: 50,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if(newValue==4){
      return window.open(blogsLink,"_blank")
    }
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <Tabs
          classes={{ root: classes.tabRoot, scroller: classes.scroller }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
          scrollButtons={"on"}
          // aria-label="scrollable auto tabs example"
          centered
        >
          <Tab
            label={
              <Typography className={classes.tabLabel}>What i do</Typography>
            }
          />
          <Tab
            label={
              <Typography className={classes.tabLabel}>Proficiency</Typography>
            }
          />
          <Tab
            label={
              <Typography className={classes.tabLabel}>Education</Typography>
            }
          />
          <Tab
            label={
              <Typography className={classes.tabLabel}>
                Experiences & Projects
              </Typography>
            }
          />
         {blogsLink && <Tab
            label={
              <Typography className={classes.tabLabel}>BLOGS</Typography>
            }
          />}
          <Tab
            label={
              <Typography className={classes.tabLabel}>Contact Me</Typography>
            }
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Fade bottom duration={1000} distance="20px">
          <Container maxWidth="lg">
            <UnderlineTypographyWithThemeColor
              variant="h3"
              containerStyle={{ marginBottom: 20 }}
              className={`${classes.titleInTabSection} underline`}
            >
              What i do
            </UnderlineTypographyWithThemeColor>
            <WhatIDo />
          </Container>
        </Fade>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Fade bottom duration={1000} distance="20px">
          <Container maxWidth="lg">
            <UnderlineTypographyWithThemeColor
              variant="h3"
              containerStyle={{ marginBottom: 20 }}
              className={classes.titleInTabSection}
            >
              Proficiency
            </UnderlineTypographyWithThemeColor>
            <Proficiency />
          </Container>
        </Fade>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Fade bottom duration={1000} distance="20px">
          <Container maxWidth="lg">
            <UnderlineTypographyWithThemeColor
              variant="h3"
              containerStyle={{ marginBottom: 20 }}
              className={classes.titleInTabSection}
            >
              Education
            </UnderlineTypographyWithThemeColor>
            <Education />
          </Container>
        </Fade>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Fade bottom duration={1000} distance="20px">
          <Container maxWidth="lg">
            <UnderlineTypographyWithThemeColor
              variant="h3"
              containerStyle={{ marginBottom: 20 }}
              className={classes.titleInTabSection}
            >
              Experiences & Projects
            </UnderlineTypographyWithThemeColor>
            <WorkExperience />
          </Container>
        </Fade>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Fade bottom duration={1000} distance="20px">
          <Container maxWidth="lg">
            <UnderlineTypographyWithThemeColor
              variant="h3"
              containerStyle={{ marginBottom: 20 }}
              className={classes.titleInTabSection}
            >
              Contact Me
            </UnderlineTypographyWithThemeColor>
            <Contact />
          </Container>
        </Fade>
      </TabPanel>
      <Container maxWidth="lg">
        <Footer />
      </Container>
    </div>
  );
}
