import Offers from './offers.interface';

export default [...Array(30)].map(
  (): Offers => ({
    mainlyTechnology: 'JS',
    logoSrc:
      'https://bucket.justjoin.it/offers/company_logos/thumb/b4a0837f135fe43ab93209dbd8e4ce660cbd39b0.jpg?1576668518',
    title: 'Frontend Developer React.js',
    salary: {
      from: 1000,
      to: 5000,
      currency: 'PLN',
    },
    companyName: 'Sii',
    companyAddress: 'Grunwaldzka 20',
    technologies: ['css', 'react', 'html'],
    createdAt: new Date(
      new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 11)),
    ),
  }),
);
