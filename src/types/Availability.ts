export interface Availability {
    in_shops: boolean;
    quest_reward: boolean;
    drop_rate: {
      boss: string;
      chance: string;
    };
  }