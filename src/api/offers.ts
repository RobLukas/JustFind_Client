import Offers from './offers.interface';
import { techCollection } from './technologyCategory';

export default [...Array(30)].map(
  (): Offers => ({
    mainlyTechnology:
      techCollection[Math.floor(Math.random() * techCollection.length)],
    logoSrc:
      'https://bucket.justjoin.it/offers/company_logos/thumb/b4a0837f135fe43ab93209dbd8e4ce660cbd39b0.jpg?1576668518',
    title: 'Frontend Developer React.js',
    salary: {
      from:
        Math.round((Math.floor(Math.random() * (5000 - 1000)) + 1000) / 1000) *
        1000,
      to:
        Math.round((Math.floor(Math.random() * (20000 - 5000)) + 5000) / 1000) *
        1000,
      currency: 'PLN',
    },
    companyName: 'Sii',
    companyAddress: 'Grunwaldzka 20',
    technologies: ['css', 'react', 'html'],
    geoPosition: [
      Number((Math.random() * (54.79086 - 49.29899) + 49.29899).toFixed(5)),
      Number((Math.random() * (23.89251 - 14.24712) + 14.24712).toFixed(5)),
    ],
    createdAt: new Date(
      new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 11)),
    ),
  }),
);
