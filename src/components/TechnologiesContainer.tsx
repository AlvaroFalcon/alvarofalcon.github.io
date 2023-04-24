import TechnologyItem from "./TechnologyItem";

type Props = {
  className?: string;
  technologyIcons: string[];
};
export default function TechnologiesContainer({
  technologyIcons,
  className,
}: Props) {
  return (
    <div className={"flex " + className}>
      {technologyIcons.map((icon) => {
        return <TechnologyItem technologyIcon={icon} />;
      })}
    </div>
  );
}
