import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import React from "react";
import profilePic from "../../resources/main.png";
import {
  experience,
  formatArrayInBlocks,
  projects,
} from "../../util/dataProvider";
import Button from "../Button";
import ContactForm from "../ContactForm";
import ExperienceBlock from "../ExperienceBlock";
import { PersonalProjectBlock } from "../PersonalProjectBlock";

const ProfilePic = () => (
  <img className={"rounded-md"} src={profilePic} alt="" />
);

const Intro = () => (
  <p className={"my-5 lg:my-14 text-lg max-w-3xl"}>
    Been diving deep into the software world since 2017, passionate about
    transforming ambitious ideas into tangible, user-friendly products. My
    journey has equipped me with essential skills in{" "}
    <span className={"text-green-400"}>
      Kotlin, Java, Typescript, Node.js, Postgres, and React
    </span>
    {", "}
    enhancing the bridge between technical creation and practical utility.
    Always on the hunt for the next innovation or tech trend. Ready to
    collaborate and craft something outstanding together!
  </p>
);

const PersonalInfo = () => (
  <>
    <h1 className={"font-bold text-2xl sm:text-4xl md:text-4xl lg:text-7xl"}>
      Hello! Im <span className={"text-green-400"}>Alvaro</span>
    </h1>
    <h2 className={"text-xl sm:text-2xl lg:text-4xl"}>
      and I'm a <span className={"text-green-400"}>Software Engineer</span>
    </h2>
  </>
);
const isMobile = () => window.innerWidth <= 768;
const renderExperienceBlocks = () => {
  return formatArrayInBlocks(experience, 2, isMobile()).map((exp, index) => {
    return (
      <div
        key={`experience-${index}`}
        className={
          "slide [&>div]:h-full [&>div>div]:pb-[6rem] lg:[&>div>div]:pb-[0] "
        }
      >
        <div className={"flex h-full flex-col lg:flex-row  gap-5"}>
          {exp.map((exp, index) => (
            <div key={`experience-block-${index}`}>
              <ExperienceBlock {...exp} />
            </div>
          ))}
        </div>
      </div>
    );
  });
};

const PresentationSection = ({ moveTo }: fullpageApi) => (
  <div className="bg-[#111] text-white section select-none py-5 lg:py-0">
    <div
      className={
        "flex flex-col-reverse lg:flex-row justify-between w-[80%] m-auto gap-5 lg:py-0"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <div>
          <PersonalInfo />
          <Intro />
        </div>
        <div className={"flex gap-5 lg:flex-row justify-center lg:justify-end"}>
          <a href="/alvaro_cv.pdf" download>
            <Button>Resume</Button>
          </a>
          <Button
            onClick={() => {
              moveTo(4);
            }}
          >
            Contact
          </Button>
        </div>
      </div>

      <ProfilePic />
    </div>
  </div>
);

const ExperienceSection = () => (
  <div
    className={`bg-[#111] text-white section select-none  ${
      isMobile() ? "fp-auto-height" : ""
    }`}
  >
    <div className={"flex h-full w-[80%] m-auto flex-col"}>
      <div className={"m-auto flex flex-col gap-5 lg:gap-20"}>
        <p className={"text-green-500 font-bold text-2xl lg:text-6xl"}>
          My experience so far
        </p>
        <div className={"flex gap-5"}>{renderExperienceBlocks()}</div>
      </div>
    </div>
  </div>
);

const renderMyProjects = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={`personal-project-${index}`}>
            <PersonalProjectBlock project={project} />
          </div>
        );
      })}
    </div>
  );
};
const MyProjectsSection = () => (
  <div className="bg-[#111] text-white section select-none">
    <div className={"flex m-auto h-full w-[80%] flex-col"}>
      <div className={"m-auto flex flex-col gap-5 lg:gap-20"}>
        <p className={"text-green-500 font-bold text-2xl lg:text-6xl"}>
          Personal Projects
        </p>
        <div className={"flex gap-5"}>{renderMyProjects()}</div>
      </div>
    </div>
  </div>
);
const ContactSection = () => (
  <div className="section bg-[#111] text-white select-none h-full">
    <div className="flex m-auto h-full w-[80%] flex-col gap-5">
      <p className={"text-green-500 font-bold text-2xl lg:text-6xl"}>Contact</p>
      <ContactForm />
    </div>
  </div>
);
export default function Home() {
  return (
    <ReactFullpage
      credits={{
        label: "Fullpage.js",
        position: "left",
        enabled: true,
      }}
      licenseKey={"gplv3-license"}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <PresentationSection {...fullpageApi} />
            <ExperienceSection />
            <MyProjectsSection />
            <ContactSection />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
