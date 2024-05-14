interface amazonOrder {
  title: string;
  date: string;
  price: number;
  title2?: string;
  date2?: string;
  price2?: number;
}

const orderHistory: amazonOrder[] = [
  {
    title: 'JavasScript for Impatient programmers',
    date: 'august 4, 2020',
    price: 34,
  },
  {
    title: 'The Timeless Way of Building',
    date: 'july 19, 2020',
    price: 44.53,
  },
  {
    title: 'Gamecube Controller Adapter',
    date: 'july 7,2020',
    price: 17.22,
  },
  {
    title: 'GameCube Controller',
    date: 'july 3, 2020',
    price: 94.95,

    title2: 'The Art of SQL',
    date2: 'july 5, 2020',
    price2: 33.99,
  },
];
