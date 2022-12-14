export const site = { title: 'Amlak Aseman' };

export const colorsHash = { border: '#dee2e6' };

export const numberWithCommas = x =>
  x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const mainMenuItems = [
  {
    id: '1',
    title: 'Home',
    subMenu: [
      { title: 'Home 1', path: '/' },
      { divider: true },
      { title: 'Home 2', path: '/home' },
    ],
  },
  {
    id: '2',
    title: 'Listing',
    subMenu: [
      {
        id: '2-1',
        title: 'Listing Grid',
        subMenu: [
          { title: 'Grid 1', path: '#' },
          { divider: true },
          { title: 'Grid 2', path: '#' },
        ],
      },
      { divider: true },
      {
        id: '2-2',
        title: 'Listing List',
        subMenu: [
          { title: 'List 1', path: '#' },
          { divider: true },
          { title: 'List 2', path: '#' },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Propery',
    subMenu: [
      {
        id: '3-1',
        title: 'User Admin',
        subMenu: [
          { title: 'Dashboard', path: '#' },
          { divider: true },
          { title: 'My Properties', path: '#' },
        ],
      },
      {
        id: '3-2',
        title: 'Listing Single',
        subMenu: [
          { title: 'Single V1', path: '#' },
          { divider: true },
          { title: 'Single V2', path: '#' },
        ],
      },
    ],
  },

  {
    id: '4',
    title: 'Pages',
    subMenu: [
      {
        id: '4-1',
        title: 'Pages',
        subMenu: [
          { title: 'Page 1', path: '#' },
          { divider: true },
          { title: 'page 2', path: '#' },
        ],
      },
      {
        id: '4-2',
        title: 'About Us ',
        path: '#',
      },
    ],
  },
  {
    id: '5',
    title: 'Blog',
    subMenu: [
      { title: 'Blog 1', path: '#' },
      { divider: true },
      { title: 'Blog 2', path: '#' },
    ],
  },

  { id: '5', title: 'Contact', path: '/contactUs' },
];
// images, forRent, featured, price, detail, user
// detail: fileType, title, address, beds, baths, SqFt, createTime, user, images
// user: fullname,

const users = [
  { id: '1', fullName: 'Ahmad Yari', avatar: '/avatar/avatar1.jpg' },
  { id: '2', fullName: 'Ali Jamali', avatar: '/avatar/avatar2.jpg' },
  { id: '3', fullName: 'Reza Farhadi' },
];

const detailes = [
  {
    id: '1',
    fileType: 'Apartment',
    title: 'Renovated Apartment',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '13000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp2.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp3.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp4.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '2',
    fileType: 'Villa',
    title: 'Gorgeous Villa Bay View',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '21000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp7.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp5.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp6.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '3',
    fileType: 'Single Family Home',
    title: 'Luxury Family Home',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '10000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp8.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp9.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp10.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '4',
    fileType: 'Villa',
    title: 'Gorgeous Villa Bay View',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '21000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp15.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp16.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp17.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '5',
    fileType: 'Apartment',
    title: 'Renovated Apartment',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '13000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp2.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp3.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp4.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '6',
    fileType: 'Villa',
    title: 'Gorgeous Villa Bay View',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '21000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp7.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp5.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp6.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '7',
    fileType: 'Single Family Home',
    title: 'Luxury Family Home',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '10000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp8.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp9.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp10.jpg', alt: 'Renovated Apartment' },
    ],
  },
  {
    id: '8',
    fileType: 'Villa',
    title: 'Gorgeous Villa Bay View',
    address: '1421 San Pedro St, Los Angeles, CA 90015',
    beds: 2,
    baths: 2,
    sqft: 5280,
    forRent: true,
    featured: true,
    price: '21000',
    creatorId: '1',
    createTime: '1 day later',
    images: [
      { id: '1', src: '/images/fp15.jpg', alt: 'Renovated Apartment' },
      { id: '2', src: '/images/fp16.jpg', alt: 'Renovated Apartment' },
      { id: '3', src: '/images/fp17.jpg', alt: 'Renovated Apartment' },
    ],
  },
];

export const files = detailes.map(detail => {
  const user = users.find(user => user.id === detail.creatorId);
  detail.creatorName = user.fullName;
  detail.avatar = user.avatar;

  return { detail: detail };
});
