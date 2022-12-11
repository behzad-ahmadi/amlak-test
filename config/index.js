export const site = { title: 'Amlak Aseman' };

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
