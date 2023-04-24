export default function TechnologyItem({
  technologyIcon,
}: {
  technologyIcon: string;
}) {
  return (
    <div>
      <img src={technologyIcon} alt="" />
    </div>
  );
}
