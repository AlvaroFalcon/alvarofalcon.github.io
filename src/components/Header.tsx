import Avatar from "./Avatar";
import SocialMediaContainer from "./SocialMediaContainer";

export default function Header() {
  return (
    <header
      className={"w-full flex flex-col items-center justify-center p-14 gap-4"}
    >
      <Avatar />
      <div>
        <h1 className={"text-xl font-bold"}>Alvaro Falcon Morales</h1>
        <p>Software Engineer</p>
        <SocialMediaContainer />
      </div>
    </header>
  );
}
