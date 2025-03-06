export type TReceivedMatchStatuses = "Scheduled" | "Ongoing" | "Finished";
export type TRenderedMatchStatuses = "Match preparing" | "Live" | "Finished";

type Player = {
  kills: number;
  username: string;
};

type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type TMatch = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: TReceivedMatchStatuses;
  time: string;
  title: string;
};

export interface IMatchStatusProperties {
  color: string;
  status: TRenderedMatchStatuses;
}
