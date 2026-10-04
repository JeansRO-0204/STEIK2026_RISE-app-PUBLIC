export interface Program {
  id: 'tka' | 'utbk';
  title: string;
  tagline: string;
  description: string;
  labelClass: string;
  /** Banner path under public/, e.g. '/images/program-tka.jpg'. Empty = placeholder. */
  banner: string;
}

const LOREM =
  'lorem ipsum dolor sit amet consectetur adipiscing elit est occaecat tempor cumque voluptas aute omnis nobis quis ullamco magna distinctio aut cum officia mollitia iusto mollitia dolorem est sunt sed animi id consequat laboris amet do dolores eiusmod cupiditate eu aute qui';

export const PROGRAMS: Program[] = [
  {
    id: 'tka',
    title: 'PROGRAM TKA',
    tagline: '“Aku Siap Bantai TKA”',
    description: LOREM,
    labelClass: 'bg-program-tka',
    banner: '',
  },
  {
    id: 'utbk',
    title: 'PROGRAM UTBK',
    tagline: 'Aku Siap 700+ UTBK',
    description: LOREM,
    labelClass: 'bg-program-utbk',
    banner: '',
  },
];
