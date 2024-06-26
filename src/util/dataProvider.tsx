import { ExperienceDescription, PersonalProjectInfo } from "./types";
import bakalendar from "../resources/bakalendar.png";
export const experience: ExperienceDescription[] = [
  {
    title: "Product Engineer",
    technologies: [],
    startDate: "2023",
    subtitle: "Sigma Financial AI",
    description: `
Joined as one of the initial developers, contributing to the continuous growth and refinement of the project.
- Developed new functionalities based on requirements and resolved bugs impacting product performance.
- Engaged in backend tasks for implementing new features and addressing issues.
- Implemented unit testing with Jest and React-testing-tools to enhance code coverage.
- Ensured high quality UI/UX design, focusing on precision and responsiveness.
- Created multiple storybook stories for new and old components.

`,
  },
  {
    title: "Android Developer",
    technologies: [],
    startDate: "February 2022",
    endDate: "December 2022",
    subtitle: "Triller",
    description: `
During my time working for Triller, I have been:

- Developing new features and improving already implemented features like Analytics
- Ensuring all features are done in time
- Bugfixing the errors that come to the app.
`,
  },
  {
    title: "Software Developer",
    subtitle: "Buyviu",
    technologies: [],
    startDate: "2020",
    endDate: "2022",
    description: `
As a team member in Buyviu, I have:

- Implemented new features on the website, reaching our planning objectives and fixed bugs
- Consolidated the incorporation of our Chrome plugin which generated searches across different web pages
- Introduced new API calls into the existing backend which was written in Python using Flask, and improved other existing calls to allow scalability
- Worked mostly on native app development using Ionic with React and Typescript. Also integrating new characteristics in the native code using Kotlin and Swift
- Improved the quality of the code introducing CI/CD pipelines with Github actions
- Increased code coverage by introducing unit and integration tests.
`,
  },
  {
    title: "Android Developer",
    subtitle: "Cib Labs S.L",
    technologies: [],
    startDate: "2019",
    endDate: "2020",
    description: `
In charge of continuously developing new features to our Android application using Java and proactively proposing new ideas and improvements
- Cooperated with teammates across QA and marketing departments to surpass our project objectives
- Migrated most of the code to Kotlin to update our project to the most recent technology
- Worked in a team using agile methodologies such as Scrum.
`,
  },
  {
    title: "Junior Software Developer",
    subtitle: "2Coders Studio S.L",
    technologies: [],
    startDate: "2017",
    endDate: "2019",
    description: `
Worked on different projects as a junior software developer supervised by qualified and experienced teammates bringing the best output possible. Most of the projects were Android native development
- Android native development using Java and Kotlin on different projects
- Web application development using Vaadin Java framework
- API development with Spring (Java)
`,
  },
];

export const projects: PersonalProjectInfo[] = [
  {
    title: "BaKalendar",
    description:
      "Your friendly anime companion! Crafted with love in Kotlin using the MVVM pattern, it's the go-to app for keeping track of all the anime magic unfolding right now. With BaKalendar, you're always in the loop with the latest episodes and updates on your favorite shows. Let's start watching together!",
    imageSrc: bakalendar,
    technologies: ["kotlin"],
    link: "https://play.google.com/store/apps/details?id=com.frostfel.animelist&hl=en_US",
  },
];

export const formatArrayInBlocks = (
  array: any[],
  blocks: number,
  isMobile: boolean
) => {
  const blocksToUse = isMobile ? 1 : blocks;
  return array.reduce<any[][]>((acc, exp, index) => {
    if (index % blocksToUse === 0) {
      acc.push([exp]);
    } else {
      acc[acc.length - 1].push(exp);
    }
    return acc;
  }, []);
};
