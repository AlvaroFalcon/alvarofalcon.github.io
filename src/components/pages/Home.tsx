import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import profilePic from "../../resources/main.png";
import Button from "../Button";

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
    <h1 className={"font-bold text-2xl sm:text-4xl md:text-4xlxl lg:text-7xl"}>
      Hello! Im <span className={"text-green-400"}>Alvaro</span>
    </h1>
    <h2 className={"text-xl sm:text-2xl lg:text-4xl"}>
      and I'm a <span className={"text-green-400"}>Software Engineer</span>
    </h2>
  </>
);

export default function Home() {
  return (
    <ReactFullpage
      credits={{
        label: "Fullpage.js",
        position: "left",
        enabled: true,
      }}
      licenseKey={""}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="bg-[#111] text-white section select-none">
              <div
                className={
                  "flex flex-col lg:flex-row justify-between w-[80%] m-auto gap-5 lg:py-0"
                }
              >
                <div className={"flex flex-col gap-1"}>
                  <div
                    className={
                      "hover:scale-105 ease-in-out transition-all z-30 hover:relative"
                    }
                  >
                    <PersonalInfo />
                    <Intro />
                  </div>
                  <div className={"flex gap-5 flex-row-reverse"}>
                    <Button>Resume</Button>
                    <Button>Contact</Button>
                  </div>
                </div>

                <ProfilePic />
              </div>
            </div>
            <div className="section"></div>
            <div className="section">
              <p>Section 3</p>
            </div>
            <div className="section">
              <p>Section 4</p>
            </div>
            <div className="section">
              <p>Section 5</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
