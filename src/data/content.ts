export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jonathan Pierce',
    role: 'CEO, Pierce Holdings',
    quote: 'From the first viewing to the final signature, the team demonstrated a level of discretion and market intelligence that is simply unmatched. They found us a home that exceeded every expectation.',
    image: 'https://images.pexels.com/photos/10816007/pexels-photo-10816007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    name: 'Isabella Moreau',
    role: 'Art Director',
    quote: 'Selling our family estate was an emotional process, but their team handled every detail with grace and precision. The result was a sale well above asking, in under three weeks.',
    image: 'https://images.pexels.com/photos/27015641/pexels-photo-27015641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    name: 'Richard Sterling',
    role: 'Private Investor',
    quote: 'I have worked with many firms over the years. None come close to the market depth, negotiation skill, and white-glove service I experienced here. They are in a class of their own.',
    image: 'https://images.pexels.com/photos/13111213/pexels-photo-13111213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    name: 'Catherine Lin',
    role: 'Interior Designer',
    quote: 'Their portfolio is extraordinary, but it is the people who make the difference. Every interaction felt personal, considered, and genuinely invested in our happiness.',
    image: 'https://images.pexels.com/photos/20022702/pexels-photo-20022702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alexander Whitmore',
    role: 'Founder & Principal',
    image: 'https://images.pexels.com/photos/10816007/pexels-photo-10816007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'With over 25 years in luxury real estate, Alexander founded the firm on a simple principle: represent every client as if the property were your own.',
  },
  {
    id: 2,
    name: 'Sophia Renard',
    role: 'Director of Sales',
    image: 'https://images.pexels.com/photos/27015641/pexels-photo-27015641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Sophia leads our sales team with a rare blend of market intelligence and design sensibility, consistently ranking among the top producers nationwide.',
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'Head of Acquisitions',
    image: 'https://images.pexels.com/photos/18165006/pexels-photo-18165006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Marcus identifies off-market opportunities and guides investment strategy for our most discerning clients, with a track record across three continents.',
  },
  {
    id: 4,
    name: 'Eleanor Voss',
    role: 'Director of Client Relations',
    image: 'https://images.pexels.com/photos/20022702/pexels-photo-20022702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Eleanor ensures that every client journey is seamless, from the first inquiry to long after the keys are handed over. Her standard of care is the firm\'s signature.',
  },
];

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: 1, title: 'Property Sales', description: 'A curated sales process that positions your home in the best possible light, backed by global marketing and a private network of qualified buyers.', icon: 'Key' },
  { id: 2, title: 'Property Buying', description: 'We represent buyers with absolute discretion, leveraging deep market intelligence to identify and secure the right property at the right value.', icon: 'Search' },
  { id: 3, title: 'Property Consultation', description: 'Strategic guidance on market timing, valuation, and portfolio strategy from advisors with decades of combined experience.', icon: 'Lightbulb' },
  { id: 4, title: 'Property Investment', description: 'Data-driven analysis of emerging markets and off-market opportunities, tailored to your investment goals and risk profile.', icon: 'TrendingUp' },
  { id: 5, title: 'Site Visits', description: 'Private, personalized property tours arranged at your convenience, including virtual walkthroughs and curated neighborhood visits.', icon: 'MapPin' },
  { id: 6, title: 'Property Management', description: 'Comprehensive management of your residence, from staffing and maintenance to seasonal preparation and concierge services.', icon: 'Building2' },
];

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 1, value: '15+', label: 'Years Experience' },
  { id: 2, value: '250+', label: 'Properties Sold' },
  { id: 3, value: '20+', label: 'Premium Projects' },
  { id: 4, value: '98%', label: 'Client Satisfaction' },
];

export const reasons = [
  { id: 1, title: 'Unmatched Market Intelligence', description: 'Our advisors live and breathe their markets, providing insight that data alone cannot capture.', icon: 'BarChart3' },
  { id: 2, title: 'Global Private Network', description: 'A vetted network of buyers, sellers, and partners across three continents ensures maximum exposure and access.', icon: 'Globe' },
  { id: 3, title: 'White-Glove Service', description: 'Every interaction is handled with discretion, precision, and a genuine commitment to your goals.', icon: 'Gem' },
  { id: 4, title: 'Architectural Expertise', description: 'We understand design and construction, allowing us to represent properties with true architectural literacy.', icon: 'Compass' },
  { id: 5, title: 'Proven Results', description: 'A track record of record-setting sales and satisfied clients, built one relationship at a time.', icon: 'Award' },
  { id: 6, title: 'Absolute Discretion', description: 'Your privacy is paramount. Every transaction is conducted with the utmost confidentiality.', icon: 'ShieldCheck' },
];
