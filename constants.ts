import type { IMatchStatusProperties, TReceivedMatchStatuses } from "./types";

export const BASE_URL = "https://app.ftoyd.com/fronttemp-service";

export const MATCH_STATUS: Record<
  TReceivedMatchStatuses,
  IMatchStatusProperties
> = {
  Finished: {
    color: "bg-[#EB0237]",
    status: "Finished",
  },
  Ongoing: {
    color: "bg-[#43AD28]",
    status: "Live",
  },
  Scheduled: {
    color: "bg-[#EB6402]",
    status: "Match preparing",
  },
};
