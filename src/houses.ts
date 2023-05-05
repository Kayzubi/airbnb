import {
  house10images,
  house11images,
  house12images,
  house13images,
  house1images,
  house2images,
  house3images,
  house4images,
  house5images,
  house6images,
  house7images,
  house8images,
  house9images,
} from './assets'

import profile from './assets/profile picture.jpg'

export const reviews = [
  {
    user: 'Steve',
    date: 'May 2023',
    image: profile,
    message: `Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.`,
  },
  {
    user: 'Emily',
    image: profile,
    date: 'May 2023',
    message: `The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.`,
  },
  {
    user: 'Micheal',
    image: profile,
    date: 'May 2023',
    message: `Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.`,
  },
  {
    user: 'Jackson',
    image: profile,
    date: 'May 2023',
    message: `Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.`,
  },
]

export interface RatingType {
  name: string
  rating: number
}

export interface HouseDataTypes {
  id: number
  name: string
  location: string
  price_per_night: number
  images: string[]
  beds: number
  rooms: number
  guests: number
  baths: number
  average_rating: number
  ratings: RatingType[]
}

export const housesData: HouseDataTypes[] = [
  {
    id: 1,
    name: 'Whitefish Estate',
    location:
      '(571) 312-5588 5500 Holmes Run Pky Alexandria, Virginia(VA), 22304',
    price_per_night: 10000,
    images: house1images,
    beds: 8,
    rooms: 8,
    guests: 16,
    baths: 8,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 2,
    name: 'Luxury stay in Weston, Saint James, Barbados',
    location: '(330) 755-4211 3420 New Castle Rd Lowellville, Ohio(OH), 44436',
    price_per_night: 1500,
    images: house2images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 3,
    name: 'Numero 22 - Lake Como - Design Living & Lake View',
    location:
      '(910) 452-9751 4304 Pennhurst Ct Wilmington, North Carolina(NC), 28405',
    price_per_night: 850,
    images: house3images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.8,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 4,
    name: '7,500 sq ft Private Beachfront Estate',
    location:
      '(561) 243-2816 2837 Cormorant Rd Delray Beach, Florida(FL), 33444',
    price_per_night: 3500,
    images: house4images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.7,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 5,
    name: 'Palm Springs Bungalow Hideaway',
    location: '(608) 339-8202 1445 Evergreen CtAdams, Wisconsin(WI), 53910',
    price_per_night: 2600,
    images: house5images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 6,
    name: 'Sandy Beachfront Oasis',
    location:
      '(626) 962-3557 1016 W El Dorado St West Covina, California(CA), 91790',
    price_per_night: 864,
    images: house6images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 7,
    name: 'The Secret Westside Lounge',
    location: '(678) 493-5626 123 Farm Valley Dr Canton, Georgia(GA), 30115',
    price_per_night: 4325,
    images: house7images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.8,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 8,
    name: 'Hawthorne Crown Jewel',
    location:
      '(931) 598-9460 19470 S Pittsburg Mountain Rd Sewanee, Tennessee(TN), 37375',
    price_per_night: 3500,
    images: house8images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 9,
    name: 'The Bungalow at 7th Avenue',
    location:
      '(252) 441-0202 5515 S Virginia Dare Trl Nags Head, North Carolina(NC),',
    price_per_night: 2250,
    images: house9images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.9,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 10,
    name: 'Downtown Penthouse Oasis',
    location: '(508) 869-6780 2 Orient St Boylston, Massachusetts(MA), 01505',
    price_per_night: 1475,
    images: house10images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 11,
    name: 'Sandy Beachfront Oasis',
    location:
      '(605) 487-7736 1224 School St Lake Andes, South Dakota(SD), 57356',
    price_per_night: 745,
    images: house11images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 12,
    name: 'Palm Springs Bungalow Hideaway',
    location:
      '(843) 569-6361 1005 Green Castle Dr Goose Creek, South Carolina(SC), 29445',
    price_per_night: 2347,
    images: house12images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.9,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 13,
    name: 'West Shore Country Hale',
    location: '(714) 892-1235 7766 13th St Westminster, California(CA), 92683',
    price_per_night: 1400,
    images: house13images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.7,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
]
