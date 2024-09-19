import yacht1 from '../assets/images/yachts/yacht-1.webp'
import yacht2 from '../assets/images/yachts/yacht-2.webp'
import yacht3 from '../assets/images/yachts/yacht-3.webp'
import yacht4 from '../assets/images/yachts/yacht-4.webp'
import yacht5 from '../assets/images/yachts/yacht-5.webp'

export const yachtTabs = ['Catamaran', 'Motor Boat']

export const catamaranTabData = [
  {
    id: 1,
    previewImage: yacht1,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Nomad',
    tabName: 'Catamaran',
    introParagraph: `Nomad, our 2019 Lagoon 52F is no ordinary catamaran. Superior on the outside and the inside it is also exquisite in terms of elegance, comfort, safety, user friendliness and it goes without saying, performance under sail.`,
    boatData: {
      length: 15.85,
      berths: 12,
      cabins: 6,
      wc: 6,
      cruisingSpeed: 8,
    },
    price: 1200,
  },
  {
    id: 2,
    previewImage: yacht2,
    heroImage: 'https://source.unsplash.com/1600x900/?destination',
    title: 'Nomad 2',
    tabName: 'Catamaran',
    introParagraph: `Our Nomad 2 is a 2020 Lagoon 50 and is quite simply a beauty.`,
    boatData: {
      length: 14.75,
      berths: 10,
      cabins: 6,
      wc: 4,
      cruisingSpeed: 8,
    },
    price: 1200,
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
    route: '/yachts/nomad',
  },
  {
    id: 2,
    image: yacht2,
    title: 'Hydrus 2',
    info: 'Up to 10 people',
    category: 'Starts from 22.500 per day',
    route: '/yachts/hydrus-2',
  },
  {
    id: 3,
    image: yacht3,
    title: 'Ice Nomad',
    info: 'Up to 12 people',
    category: 'Starts from 1.000 per day',
    route: '/yachts/ice-nomad',
  },
  {
    id: 4,
    image: yacht4,
    title: 'Saiga',
    info: 'Up to 10 people',
    category: 'Starts from 18.500 per day',
    route: '/yachts/saiga',
  },
  {
    id: 5,
    image: yacht5,
    title: 'Nomad Vice',
    info: 'Up to 10 people',
    category: 'Starts from 1.000 per day',
    route: '/yachts/nomad-vice',
  },
]
