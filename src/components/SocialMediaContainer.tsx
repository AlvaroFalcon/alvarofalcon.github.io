import SocialMediaItem from "./SocialMediaItem";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function SocialMediaContainer() {
  return (
    <div className={"flex"}>
      <SocialMediaItem icon={GithubIcon} />
      <SocialMediaItem icon={LinkedinIcon} />
    </div>
  );
}
