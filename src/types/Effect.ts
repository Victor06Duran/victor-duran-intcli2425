import { Duration } from "./Duration";

export interface Effect {
    attribute: string;
    value: number;
    duration: Duration;
  }