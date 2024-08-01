import Position from "./Position";

export default interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: Position;
  id: string;
}
