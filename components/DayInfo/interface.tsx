interface dayInfoInterface {
  dayInfo: {
    time: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    chance_of_rain: number;
  }[];
}

export type { dayInfoInterface };
