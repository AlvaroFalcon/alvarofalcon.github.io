import TechnologyItem from "./TechnologyItem";

type Props = {
  technologyIcons: string[];
};
export default function TechnologiesContainer({ technologyIcons }: Props) {
  return (
    <div className={"flex"}>
      {technologyIcons.map((icon) => {
        return <TechnologyItem technologyIcon={icon} />;
      })}
    </div>
  );
}
