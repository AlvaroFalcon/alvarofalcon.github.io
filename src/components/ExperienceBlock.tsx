import Markdown from "react-markdown";
import { Technology } from "../util/types";

type Props = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: Technology[];
};

const getDateString = (startDate: string, endDate: string | undefined) => {
  return endDate ? `${startDate} - ${endDate}` : `${startDate} - Present`;
};

const renderTechnologies = (technologies: Technology[]) => {
  return technologies.map((technology) => {
    return <div key={technology}>{technology}</div>;
  });
};

const ExperienceBlock = ({
  title,
  subtitle,
  startDate,
  endDate,
  description,
  technologies,
}: Props) => {
  return (
    <div className={"flex flex-col gap-5 self-start px-10 lg:px-0"}>
      <div className={"flex flex-col"}>
        <span className={"font-bold"}>{title}</span>
        <span>{subtitle}</span>
        <span className={"text-gray-400"}>
          {getDateString(startDate, endDate)}
        </span>
      </div>
      <div className={"prose text-white"}>
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
};

export default ExperienceBlock;
