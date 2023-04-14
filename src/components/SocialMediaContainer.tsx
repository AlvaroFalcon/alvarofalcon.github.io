import SocialMediaItem from "./SocialMediaItem";
import data from "../data-source/social.json";

export default function SocialMediaContainer() {
  return (
    <div className={"flex"}>
      {data.map((item) => {
        return <SocialMediaItem icon={item.icon} link={item.link} />;
      })}
    </div>
  );
}
