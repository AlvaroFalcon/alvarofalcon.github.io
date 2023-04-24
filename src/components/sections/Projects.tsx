import ProjectItem from "../ProjectItem";
import data from "../../data-source/projects.json";

export default function Projects() {
  return (
    <section className={"flex w-full p-[5%] justify-between flex-col"}>
      <div className={"flex flex-row-reverse"}>
        <h1 className={"font-bold text-2xl"}>{data.pageTitle}</h1>
      </div>
      <div className={"flex flex-row w-full"}>
        <div className={"flex flex-row gap-[100px]"}>
          {data.projects.map((project) => {
            return <ProjectItem {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
