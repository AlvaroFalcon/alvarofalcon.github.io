import Avatar from "./Avatar";
import SocialMediaContainer from "./SocialMediaContainer";

export default function Header() {
  return (
    <header
      className={
        "w-full flex flex-col items-center justify-center p-14 gap-4 lg:flex-row lg:justify-between lg:px-20"
      }
    >
      <Avatar />
      <div className={"flex-1 flex flex-col justify-center items-center gap-2"}>
        <h1 className={"text-xl lg:text-5xl font-bold"}>
          Alvaro Falcon Morales
        </h1>
        <p className={"lg:text-3xl"}>Software Engineer</p>
        <SocialMediaContainer />
      </div>
    </header>
  );
}
