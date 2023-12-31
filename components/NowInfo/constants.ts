const week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

const months = [
  'янв.',
  'фев.',
  'мар.',
  'апр.',
  'май',
  'июн.',
  'июл.',
  'авг.',
  'сен.',
  'окт.',
  'ноя.',
  'дек.',
];

const obj = {
  N: 'Север',
  NNE: 'Северо-северо-восток',
  NE: 'Северо-восток',
  ENE: 'Востоко-северо-восток',
  E: 'Восток',
  ESE: 'Востоко-юго-восток',
  SE: 'Юго-восток',
  SSE: 'Юго-юго-восток',
  S: 'Юг',
  SSW: 'Юго-юго-запад',
  SW: 'Юго-запад',
  WSW: 'Западо-юго-запад',
  W: 'Запад',
  WNW: 'Западо-северо-запад',
  NW: 'Северо-запад',
  NNW: 'Северо-северо-запад',
};

const dirs = new Map(Object.entries(obj));

export { week, months, dirs };
