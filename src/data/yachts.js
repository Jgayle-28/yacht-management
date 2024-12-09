import yacht1 from '../assets/images/yachts/yacht-1.webp'
import yacht2 from '../assets/images/yachts/yacht-2.webp'
import yacht3 from '../assets/images/yachts/yacht-3.webp'
import yacht4 from '../assets/images/yachts/yacht-4.webp'
import yacht5 from '../assets/images/yachts/yacht-5.webp'

import sophia1 from '../assets/images/sophia/sophia-1.jpg'
import lagoon from '../assets/images/lagoon.jpg'

import mg1 from '../assets/images/mg/mg-1.webp'

export const yachtTabs = ['Catamaran']

export const catamaranTabData = [
  {
    id: 1,
    previewImage: sophia1,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Sophia',
    tabName: 'Catamaran',
    introParagraph: `Sophia is a 2020 build Lagoon 50 catamaran. She offers an attractive option to navigators in search of a large “seaworthy and modern” adventurous vacation. With a new visual identity, rigging and hull design, she provides increased performance, comprising a unique brand signature. Indeed, the 50’s elegance seduces thanks to the bevelled shape of her hulls, generous volumes and panoramic views, more than ever enhanced. Sophia can accommodate up to 12 people + 2 crew members.`,
    boatData: {
      length: ` 14.75 m / 48’5”`,
      berths: 12,
      cabins: 6,
      wc: 6,
      cruisingSpeed: 9,
    },
    price: `2,150`,
  },
  {
    id: 2,
    previewImage: mg1,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Mary Grace II',
    tabName: 'Catamaran',
    introParagraph: `The Lagoon 46 reinforces the fundamentals that have made our brand a staple of the catamaran sailing industry, a freeing, gentle lifestyle full of innovation. The 46’s design, while comparable to its larger sisters, is still in a league of her own. Discover the 46, and find your sense of freedom.`,
    boatData: {
      length: 13.99,
      berths: 10,
      cabins: `4 double + convertible table in saloon  + 1 berth each bow`,
      wc: 4,
      cruisingSpeed: 8,
    },
    price: 815,
  },
  {
    id: 3,
    previewImage: lagoon,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Lagoon 40',
    tabName: 'Catamaran',
    introParagraph: `A breeze of freedom blows over the Lagoon 40. Live in harmony with the sea and explore the world in complete safety. Your dream destinations have never been so close.`,
    boatData: {
      length: 12.75,
      berths: 8,
      cabins: 4,
      wc: 4,
      cruisingSpeed: 8,
    },
    price: 815,
  },
]

export const motorBoatTabData = [
  {
    id: 1,
    previewImage: yacht3,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Ice Nomad',
    tabName: 'Motor Boat',
    introParagraph: `This is a brand new Rafnar T-Top 40 leisure version. One of the most unique boats in the market.`,
    boatData: {
      length: 12.0,
      berths: 2,
      cabins: 1,
      wc: 1,
      cruisingSpeed: '30-35',
    },
    price: 1200,
  },
  {
    id: 2,
    previewImage: yacht4,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Saiga',
    tabName: 'Motor Boat',
    introParagraph: `The Nimbus T11 is a spacious and adaptable day boat for great days in fantastic company. It is a boat which values seaworthiness, smart functionality, user-friendliness and a careful, contemporary Scandinavian design.`,
    boatData: {
      length: 12.4,
      berths: 4,
      cabins: 2,
      wc: 1,
      cruisingSpeed: '30-35',
    },
    price: 1200,
  },
  {
    id: 3,
    previewImage: yacht5,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Nomad Vice',
    tabName: 'Motor Boat',
    introParagraph: `AXOPAR 37 is an award- winning project that has turned out to be travelers' favourite choice for versatile, multi- functional demands.`,
    boatData: {
      length: 11.5,
      berths: 4,
      cabins: 2,
      wc: 1,
      cruisingSpeed: '30-35',
    },
    price: 1200,
  },
]

export const yachtData = [
  {
    id: 1,
    image: yacht1,
    title: 'Nomad',
    info: 'Up to 12 people ',
    category: 'Starts from 18.500 per day',
    // route: '/yachts/nomad',
    route: null,
  },
  {
    id: 2,
    image: yacht2,
    title: 'Hydrus 2',
    info: 'Up to 10 people',
    category: 'Starts from 22.500 per day',
    // route: '/yachts/hydrus-2',
    route: null,
  },
  {
    id: 3,
    image: yacht3,
    title: 'Ice Nomad',
    info: 'Up to 12 people',
    category: 'Starts from 1.000 per day',
    // route: '/yachts/ice-nomad',
    route: null,
  },
  {
    id: 4,
    image: yacht4,
    title: 'Saiga',
    info: 'Up to 10 people',
    category: 'Starts from 18.500 per day',
    // route: '/yachts/saiga',
    route: null,
  },
  {
    id: 5,
    image: yacht5,
    title: 'Nomad Vice',
    info: 'Up to 10 people',
    category: 'Starts from 1.000 per day',
    // route: '/yachts/nomad-vice',
    route: null,
  },
]
