/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Atharva Soundankar",
  title: "Hi all, I'm Atharva",
  subTitle: emoji(
    "An aspiring data scientist who turns raw data into valuable insights, like a sculptor shaping a masterpiece from stone. Always learning, always evolving."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FcwnODkhAL-N6sSy7yGISzpLiozA2dZx/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mercydeez/",
  linkedin: "https://www.linkedin.com/in/atharva-soundankar/",
  gmail: "atharva3895@gmail.com@gmail.com",
  instagram:"https://www.instagram.com/atharva_soundankar/",
  twitter:"https://x.com/Atharva3895",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS DATA SCIENTIST WHO LOVES FINDING HIDDEN PATTERNS IN DATA",
  skills: [
    emoji(
      "⚡ Gather and clean data using Python libraries like Pandas."
    ),
    emoji("⚡ Visualize and analyze data patterns with Matplotlib and Seaborn."),
    emoji(
      "⚡ Create, train, and evaluate machine learning models using Scikit-Learn."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Sql-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "R Programming",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HackerRank",
      fontAwesomeClassname: "fab fa-hackerrank"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Master of Science in Computer Application",
      duration: "September 2023 - July 2025"
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: " Passed with 'A' GRADE",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming ", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr.Data Analyst",
      company: "Manasvi Tech Solutions Pvt.Ltd",
      companylogo: require("./assets/images/manasvi.png"),
      date: "Dec 2024 – Present",
      desc: "In my role as a Data Analyst, I collected, cleaned, and analyzed data to identify trends and patterns, created reports and dashboards, and provided actionable insights to support business decisions and improve operational efficiency.",
      descBullets: [  ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/no_risk.png.png"),
      projectName: "Forest Fire Detection Module",
      projectDesc: "A machine learning-based web application that predicts forest fire risks based on temperature, oxygen levels, and humidity. It provides real-time predictions on whether the forest is safe or in danger of fire, including the probability of the prediction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/mercydeez/forest-fire-detection-module"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/prime_dashboard.png"),
      projectName: "AmazonPrime Dashboard",
      projectDesc: "A dashboard for Amazon Prime that shows key data such as total subscribers, popular shows, and user insights. It helps track trends and measure content performance through simple, easy-to-understand charts.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Goethe Institute A2 Exam ",
      subtitle:
        "Successfully passed the Goethe Institute A2 Exam, demonstrating proficiency in basic German language skills, including reading, writing, listening, and speaking, for everyday communication.",
      image: require("./assets/images/goethe.png"),
      imageAlt: "Goethe Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19TwlmV_o3cNUJFYVjbYromEMSkZASjqE/view?usp=drive_link"
        }
      ]
    },
    {
      title: "HackerRank SQL Certification",
      subtitle:
        "Earned the HackerRank Basic SQL Certificate, demonstrating proficiency in SQL fundamentals, including querying databases, filtering data, and performing basic joins and aggregations.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.hackerrank.com/certificates/iframe/55fe6e819027"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7798884495",
  email_address: "atharva3895@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Atharva3895", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
