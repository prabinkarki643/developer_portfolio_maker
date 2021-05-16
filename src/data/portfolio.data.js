/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
export const mainBackgroundImageLink = "/images/background2.jpg";
export const appLogo = "/images/PK.png";
export const blogsLink = "https://codeisindna.com/blog/";
export const footer = {
  copyRightText: `Copyright © ${new Date().getFullYear()} Prabin karki`,
};
//SEO Related settings
export const seo = {
  title: "Er. Prabin Karki",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Er. Prabin Karki",
    type: "website",
    url: "https://prabin-karki.com.np/",
  },
};
export const greeting = {
  /* Your Summary And Greeting Section */
  profileImage: "/images/prabin.png",
  username: "Prabin Karki",
  title: <p>Hi, I'm Prabin <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px"></img></p>,
  subTitle: emoji(
    `A passionate Software Developer 🚀 having an experience of building
    Web and Mobile applications with (Java & Kotlin)/ JavaScript / Reactjs
    / Nodejs / React Native / MYSQL and some other cool libraries and
    frameworks`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Z4jnB7ApuIOiLI-i15QU2_aBAYsQFpu4/view",
};

// Your Social Media Link

export const socialMediaLinks = {
  github: "https://github.com/githubprabin143",
  linkedin: "https://www.linkedin.com/in/prabin-karki-936546159/",
  gmail: "prabinkarki643@gmail.com",
  facebook: "https://www.facebook.com/pravin.karki.98",
  instagram: "https://www.instagram.com/prabin_karki_143",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
export const skillsSection = {
  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    ,
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "MYSQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma",
    },
    {
      skillName: "XD",
      fontAwesomeClassname: "fab fa-adobe",
    },
  ],
};

// Images are pointing to /images in public directory
export const whatIDo = {
  featureImg: "/images/working_on_laptop.jpg",
  intro:
    "CRAZY FULL STACK (MOBILE & WEB) DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "Develop highly interactive mobile applications for Android (JAVA & Kotlin)"
    ),
    emoji(
      "Develop highly interactive mobile applications for both Android & IOS (REACT NATIVE)"
    ),
    emoji("Develop highly interactive web applications (REACT Js)"),
    emoji("Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("Develop Rest api using Node.js and MYSQL"),
    emoji("Integration of third party services such as Firebase/ AWS "),
  ],
};

export const proficiency = {
  featureImg: "/images/book_stack.jpg",
  tectStackSkills: [
    {
      Stack: "Android Application Development", //Insert stack or technology you have experience in
      progressPercentage: 90, //Insert relative proficiency in percentage
    },
    {
      Stack: "Node js & MYSQL (Backend Development)", //Insert stack or technology you have experience in
      progressPercentage: 60, //Insert relative proficiency in percentage
    },
    {
      Stack: "React js & Ant Design (Web Development)", //Insert stack or technology you have experience in
      progressPercentage: 70, //Insert relative proficiency in percentage
    },
    {
      Stack: "React Native cross platform mobile app development", //Insert stack or technology you have experience in
      progressPercentage: 60, //Insert relative proficiency in percentage
    },
    {
      Stack: "AWS services (EC2, AWS Amplifiy, S3, Route 53)", //Insert stack or technology you have experience in
      progressPercentage: 50, //Insert relative proficiency in percentage
    },
    {
      Stack: "PHP & MYSQL (Slim framework) ", //Insert stack or technology you have experience in
      progressPercentage: 60, //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML, CSS, Jquery, AJAX", //Insert stack or technology you have experience in
      progressPercentage: 40, //Insert relative proficiency in percentage
    },
  ],
};

// // Your education background
export const educationInfo = {
  schools: [
    {
      schoolName: "R.R. Institute of Technology (Bangalore)",
      logo: "/images/bti-new-logo@2x.png",
      degree: "Bachelor in computer science engineering",
      duration: "2014 - 2018",
      desc: "",
      link: "https://www.facebook.com",
      descBullets: [],
    },
    {
      schoolName: "R.R. Institute of Technology (Bangalore)",
      logo: "/images/bti-new-logo@2x.png",
      degree: "Diploma in computer science & engineering",
      duration: "2012 - 2014",
      desc: "",
      link: "",
      descBullets: [],
    },
  ],
};

// // Your top work experiences
export const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      underDevelopment: false,
      link: "https://bit.ly/smartshaalaa",
      role: "Founder & Developer",
      company: "Smartshaalaa",
      companylogo:
        "https://lh3.googleusercontent.com/eoT0s_3p-nX5Kco4IXf2ri9gJcnMyUPfo7fcpA6hS7mUf-uZxBvEE-1_UKWDxsYIEsgV=s360-rw",
      date: "July 2020 – Present",
      desc: "Smartshaalaa helps all retailers in managing (inventory management, invoicing, billing, storing them in the cloud for free) and helps to grow their business faster with the help of online stores opened automatically by Smartshaalaa.",
      responsibilitiesBullets: [
        //add as null if you dont want to show this.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      // link:"https://bit.ly/mydukkan",
      underDevelopment: false,
      link: "https://mydukanretailer.com/",
      role: "Mobile Application Developer",
      company: "MyDukan",
      companylogo:
        "https://lh3.googleusercontent.com/ObQkr9RqkijQO7N49XY7wJRxrVRq9yD25nov-Rgjly_f8DWL_WBUbFdYMO5eaC22ayNE=s360-rw",
      date: "July 2019 – July 2020",
      desc: "Digiretail provides technology first solutions to SMBs for efficient supply-chain management by making them market aware with data trends, helping them with supplier relationship management, CRM and Product lifecyle managemnet.",
      responsibilitiesBullets: [
        //add as null if you dont want to show this.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      link: "https://bit.ly/kloh1aa",
      underDevelopment: false,
      role: "Software Engineer Intern",
      company: "Kloh",
      companylogo:
        "https://lh3.googleusercontent.com/4ABE8NjsPTdVMH5wc5-bdT_7IppgT6_6DyVUwiVMFcF2YUAUzUEVZxO60FV2QFaWSuU=s360-rw",
      date: "Jun 2018 – Aug 2018",
      desc: "KLOH is the easiest way to learn a new hobby class near you. From Salsa to Horse-Riding, from Swimming to Pottery, you can learn anything on Kloh. With Kloh, discover and join the best classes, workshops near you and learn your favourite hobby.",
      responsibilitiesBullets: [
        //add as null if you dont want to show this.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      link: "https://bit.ly/voice-news",
      underDevelopment: false,
      role: "Creator (Developer)",
      company: "Voice News",
      companylogo:
        "https://lh3.googleusercontent.com/0oLpzUXLY85MabiDuKq_OSYDOnkHYr7KBzhM8zQmUZ-SWSpXCk4Kbe03Lo1TPGM2oq8=s360-rw",
      date: "2018",
      desc: "Voice News is an android application that helps the peoples to surf the news in different way than the other application. User can listen the latest news from top news websites by the google voice service that we integrate in our app an also they can read the news.Voice News provide the Latest news headlines and summarized news content to the user",
      responsibilitiesBullets: [
        //add as null if you dont want to show this.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      link: "https://bit.ly/myoutfitsa",
      underDevelopment: true,
      role: "Creator (Developer)",
      company: "My Outfits",
      companylogo:
        "https://lh3.googleusercontent.com/SSmb9Xrbb2VCMwsgCVv5UupOindB00gFC9uFX9siUqyE-pBdpG0ujSZlE0ZhQDkL39o=s360-rw",
      date: "2018",
      desc: "My Outfits app is an platform where user can make their fashion collection and save it online in different categories. My Outfits app allows all users to track their items from collection and also they can track each day Outfits. We will show you the best product base upon your collection from different fashion websites. and you can add that to you collection after buying it",
      responsibilitiesBullets: [
        //add as null if you dont want to show this.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ],
};


export const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8050078113",
  email_address: "milanshrestha837@gmail.com",
};
