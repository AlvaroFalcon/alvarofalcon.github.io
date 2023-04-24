import data from "../data-source/about.json";
import TechnologiesContainer from "./TechnologiesContainer";
export default function About() {
  return (
    <section className={"flex w-full p-[5%] justify-between flex-col"}>
      <div className={"flex"}>
        <h1 className={"font-bold text-2xl"}>{data.title}</h1>
      </div>
      <div className={"flex flex-row-reverse w-full"}>
        <div className={"flex flex-col max-w-[40%] gap-4"}>
          <p>{data.text}</p>
          <TechnologiesContainer technologyIcons={data.technologies} />
        </div>
      </div>
    </section>
  );
}
