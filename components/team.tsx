import clsx from "clsx";
import Image from "next/image";
import { HTMLAttributes } from "react";

import teamIcon from "@/public/icons/team.svg";

export const Team = (props: HTMLAttributes<HTMLDivElement>) => {
  const isSecondTeam = props.dir === "rtl";
  const teamNumber = isSecondTeam ? "2" : "1";
  return (
    <div
      {...props}
      className={clsx("flex items-center gap-5", props.className)}
    >
      <Image src={teamIcon} alt="Team icon" />
      <p className="font-semibold">Command №{teamNumber}</p>
    </div>
  );
};
