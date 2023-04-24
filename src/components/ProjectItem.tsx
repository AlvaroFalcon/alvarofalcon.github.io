import TechnologiesContainer from "./TechnologiesContainer";
type Props = {
  image: string;
  technologies: string[];
  title: string;
};
export default function ProjectItem({ image, technologies, title }: Props) {
  return (
    <div className={"flex flex-col text-center gap-2"}>
      <img src={image} alt="" className={"rounded-[5%]"} />
      <h2 className={"font-bold text-dark"}>{title}</h2>
      <TechnologiesContainer
        technologyIcons={technologies}
        className={"justify-center"}
      />
    </div>
  );
}
