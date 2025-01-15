import { Effect } from "./Effect";
import { SecondaryEffect } from "./SecondaryEffect";

export interface PrimaryEffects {
    primary: Effect;
    secondary: SecondaryEffect[];
  }