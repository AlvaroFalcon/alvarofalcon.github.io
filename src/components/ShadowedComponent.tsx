import { PropsWithChildren } from "react";

const ShadowedComponent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`relative h-fit w-fit ${className}`}>
      <div className={"relative z-10"}>{children}</div>
      <div className={"absolute h-full w-full top-2 left-2 bg-green-500"} />
    </div>
  );
};

export default ShadowedComponent;
