export interface Project {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  amenities: string[];
  status: string;
  units: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'The Aurelius Collection',
    location: 'Beverly Hills, California',
    description: 'A collection of twelve bespoke estates, each sited on a minimum of two acres with private grounds designed by award-winning landscape architects.',
    image: 'https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    amenities: ['Private Grounds', 'Infinity Pool', 'Smart Home', 'Wine Cellar', '6-Car Garage'],
    status: 'Selling Now',
    units: '12 Estates',
  },
  {
    id: 2,
    name: 'Marina Bay Towers',
    location: 'Miami, Florida',
    description: 'Twin residential towers rising 40 stories above the marina, offering 180 residences with panoramic water views and five-star amenities.',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    amenities: ['Marina Access', 'Rooftop Pool', 'Concierge', 'Spa', 'Fitness Center', 'Private Cinema'],
    status: 'Under Construction',
    units: '180 Residences',
  },
  {
    id: 3,
    name: 'The Hillside Reserves',
    location: 'Scottsdale, Arizona',
    description: 'An exclusive enclave of twenty modern villas carved into the desert hillside, each with uninterrupted valley views and private infinity pools.',
    image: 'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    amenities: ['Infinity Pool', 'Desert Gardens', 'Fire Terraces', 'Guest Casitas', 'Smart Home'],
    status: 'Selling Now',
    units: '20 Villas',
  },
  {
    id: 4,
    name: 'Park Crescent Living',
    location: 'Boston, Massachusetts',
    description: 'A landmark conversion offering 48 residences overlooking a historic park, blending classic architecture with contemporary luxury interiors.',
    image: 'https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    amenities: ['Park View', 'Doorman', 'Fitness Center', 'Wine Room', 'Storage', 'Bike Room'],
    status: 'Coming Soon',
    units: '48 Residences',
  },
];
