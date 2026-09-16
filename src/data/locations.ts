export interface LocationData {
  id: number;
  name: string;
  region: string;
  description: string;
  image: string;
  properties: number;
}

export const locations: LocationData[] = [
  {
    id: 1,
    name: 'Beverly Hills',
    region: 'California',
    description: 'The pinnacle of West Coast luxury, known for its private estates, palm-lined boulevards, and discerning clientele.',
    image: 'https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    properties: 42,
  },
  {
    id: 2,
    name: 'Manhattan',
    region: 'New York',
    description: 'The world\'s most iconic skyline, home to landmark penthouses and architecturally significant residences.',
    image: 'https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    properties: 68,
  },
  {
    id: 3,
    name: 'Malibu',
    region: 'California',
    description: 'Where the mountains meet the Pacific. Oceanfront villas and architectural masterpieces along 21 miles of coastline.',
    image: 'https://images.pexels.com/photos/28586234/pexels-photo-28586234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    properties: 35,
  },
  {
    id: 4,
    name: 'Miami',
    region: 'Florida',
    description: 'A vibrant waterfront city of glass towers, marina living, and a global art and design culture.',
    image: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    properties: 54,
  },
  {
    id: 5,
    name: 'Aspen',
    region: 'Colorado',
    description: 'A mountain sanctuary for the world\'s most discerning, with slopeside contemporary homes and private retreats.',
    image: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    properties: 28,
  },
  {
    id: 6,
    name: 'Greenwich',
    region: 'Connecticut',
    description: 'Classic country estates on manicured acreage, a short distance from Manhattan yet a world apart.',
    image: 'https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    properties: 31,
  },
];
