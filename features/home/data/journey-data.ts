export interface MemoryStop {
  id: string;
  stopNumber: string;
  chapter: 'lagos' | 'owerri' | 'quiet' | 'abuja' | 'closing';
  title: string;
  dateOrPeriod?: string;
  paragraphs: string[];
  pullQuote?: string;
  image?: {
    url: string;
    alt: string;
    caption?: string;
    credit?: string;
  };
  layoutVariant?: 'city-opening' | 'photo-split' | 'quote-focus' | 'editorial-card' | 'photo-card';
}

export const LAGOS_STOPS: MemoryStop[] = [
  {
    id: 'stop-01',
    stopNumber: '01',
    chapter: 'lagos',
    title: 'A boy is born',
    dateOrPeriod: 'Nov 8, 1996',
    paragraphs: [
      'On November 8, 1996, Mr and Mrs Ilozulu welcomed their first son, Ilozulu Christopher Chiduso. Known to family and friends as Chris. Our journey starts here.',
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      alt: 'Lagos morning light and architectural perspective',
      caption: 'The beginning in Lagos',
      credit: 'Namnso Ukpanah / Unsplash',
    },
    layoutVariant: 'photo-split',
  },
  {
    id: 'stop-02',
    stopNumber: '02',
    chapter: 'lagos',
    title: 'A full house',
    paragraphs: [
      'Two more boys and a girl would follow, making Chris the second of six. Growing up in the middle of a crowd teaches you to share, to stand your ground, and to look out for people. He’d need all three. And it all unfolded in one city.',
    ],
    pullQuote: 'Growing up in the middle of a crowd teaches you to share and stand your ground.',
    layoutVariant: 'quote-focus',
  },
  {
    id: 'stop-03',
    stopNumber: '03',
    chapter: 'lagos',
    title: 'Stop one: Lagos',
    paragraphs: [
      'Nursery, primary, secondary. Chris’s whole childhood happened here, and the boy who left was nothing like the boy who arrived.',
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1577975882846-431adc8c2009?q=80&w=1200&auto=format&fit=crop',
      alt: 'Lagos urban atmosphere and streets',
      caption: 'The streets of childhood',
      credit: 'Namnso Ukpanah / Unsplash',
    },
    layoutVariant: 'editorial-card',
  },
  {
    id: 'stop-04',
    stopNumber: '04',
    chapter: 'lagos',
    title: 'Lagos mornings',
    paragraphs: [
      'Uniforms, traffic noise before sunrise, and football outside whenever the day allowed. Simple days, long afternoons.',
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
      alt: 'Football match on grass field in warm light',
      caption: 'Football whenever the day allowed',
      credit: 'Ian Higbee / Unsplash',
    },
    layoutVariant: 'photo-card',
  },
  {
    id: 'stop-05',
    stopNumber: '05',
    chapter: 'lagos',
    title: 'School days',
    paragraphs: [
      'Classrooms, friends who knew him before anyone else did, and break-time snacks that were never enough.',
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
      alt: 'Empty school classroom with wooden desks and sunlight',
      caption: 'Classrooms and friends from the start',
      credit: 'Yustinus Tjiuwanda / Unsplash',
    },
    layoutVariant: 'editorial-card',
  },
  {
    id: 'stop-06',
    stopNumber: '06',
    chapter: 'lagos',
    title: 'How many tubers?',
    paragraphs: [
      'His dad loved yam. Chris says that growing up, if you asked his dad for something like excursion money, he’d look at you and ask, "Do you know how many tubers I can buy with this?" Some arguments you just can’t win.',
    ],
    pullQuote: '“Do you know how many tubers I can buy with this?”',
    layoutVariant: 'quote-focus',
  },
  {
    id: 'stop-07',
    stopNumber: '07',
    chapter: 'lagos',
    title: 'Dubai',
    paragraphs: [
      'For all the yam maths, the whole family still made it to Dubai on vacation.',
      'The world was waiting. But first, the road led east.',
    ],
    pullQuote: 'The world was waiting. But first, the road led east.',
    image: {
      url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      alt: 'Dubai skyline and horizon',
      caption: 'A family vacation before the road turned east',
      credit: 'Ahmed Aldaie / Unsplash',
    },
    layoutVariant: 'photo-split',
  },
];
