import {
  house1images,
  house2images,
  house3images,
  house4images,
} from './assets'

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
  ratings: {
    cleanliness: number
    accuracy: number
    communication: number
    location: number
    check_in: number
    value: number
  }
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
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
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
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
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
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
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
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 5,
    name: 'Palm Springs Bungalow Hideaway',
    location: '(608) 339-8202 1445 Evergreen CtAdams, Wisconsin(WI), 53910',
    price_per_night: 2600,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 6,
    name: 'Sandy Beachfront Oasis',
    location:
      '(626) 962-3557 1016 W El Dorado St West Covina, California(CA), 91790',
    price_per_night: 864,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 7,
    name: 'The Secret Westside Lounge',
    location: '(678) 493-5626 123 Farm Valley Dr Canton, Georgia(GA), 30115',
    price_per_night: 4325,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 8,
    name: 'Hawthorne Crown Jewel',
    location:
      '(931) 598-9460 19470 S Pittsburg Mountain Rd Sewanee, Tennessee(TN), 37375',
    price_per_night: 3500,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 9,
    name: 'The Bungalow at 7th Avenue',
    location:
      '(252) 441-0202 5515 S Virginia Dare Trl Nags Head, North Carolina(NC),',
    price_per_night: 2250,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 10,
    name: 'Downtown Penthouse Oasis',
    location: '(508) 869-6780 2 Orient St Boylston, Massachusetts(MA), 01505',
    price_per_night: 1475,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 11,
    name: 'Sandy Beachfront Oasis',
    location:
      '(605) 487-7736 1224 School St Lake Andes, South Dakota(SD), 57356',
    price_per_night: 745,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 12,
    name: 'Palm Springs Bungalow Hideaway',
    location:
      '(843) 569-6361 1005 Green Castle Dr Goose Creek, South Carolina(SC), 29445',
    price_per_night: 2347,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
  {
    id: 13,
    name: 'West Shore Country Hale',
    location: '(714) 892-1235 7766 13th St Westminster, California(CA), 92683',
    price_per_night: 1400,
    images: [],
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    ratings: {
      cleanliness: 5,
      accuracy: 4.5,
      communication: 4.99,
      location: 4.8,
      check_in: 4.9,
      value: 4.2,
    },
  },
]