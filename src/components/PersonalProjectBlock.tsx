import { PersonalProjectInfo } from "../util/types";

export const PersonalProjectBlock = ({
  project,
}: {
  project: PersonalProjectInfo;
}) => {
  return (
    <div className={"p-5 lg:max-w-[33%] flex flex-col gap-5"}>
      <p className={"text-white text-2xl font-bold"}>{project.title}</p>
      <img
        className={"w-full h-[300px] object-cover"}
        src={project.imageSrc}
        alt={"Personal project preview"}
      />
      <p className={"text-white"}>{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target={"_blank"}
          className={"text-green-500 underline"}
        >
          Check it out
        </a>
      )}
    </div>
  );
};
