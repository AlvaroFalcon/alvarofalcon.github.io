export default function SocialMediaItem(props: { icon: any; link: string }) {
  return (
    <div>
      <a href={props.link}>
        <img src={props.icon} alt="" />
      </a>
    </div>
  );
}
