import TechnologiesContainer from "./TechnologiesContainer";
import data from "../data-source/projects.json";
export default function ProjectItem() {
  return (
    <div className={"flex flex-col text-center gap-2"}>
      <img src={data.image} alt="" className={"rounded-[5%]"} />
      <h2 className={"font-bold text-dark"}>{data.title}</h2>
      <TechnologiesContainer
        technologyIcons={data.technologies}
        className={"justify-center"}
      />
    </div>
  );
}
