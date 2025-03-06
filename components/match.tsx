import clsx from "clsx";

import { MATCH_STATUS } from "@/constants";
import { TMatch } from "@/types";

import { Team } from "./team";

interface Props {
  match: TMatch;
}

export const Match = ({ match }: Props) => {
  const { color, status } = MATCH_STATUS[match.status];
  return (
    <div className="bg-[#0B0E12]">
      <div className="px-9 py-4 flex justify-between items-center">
        <Team />
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold">{`${match.awayScore} : ${match.homeScore}`}</p>
          <div
            className={clsx(
              "min-w-[92px] px-1.5 h-[27px] text-center rounded-sm",
              color
            )}
          >
            {status}
          </div>
        </div>
        <Team dir="rtl" />
      </div>
    </div>
  );
};
