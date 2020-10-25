import TechnologyType from './technologyCollection';

interface Offers {
  mainlyTechnology: TechnologyType;
  logoSrc: string;
  title: string;
  salary: {
    from: number;
    to: number;
    currency: string;
  };
  companyName: string;
  companyAddress: string;
  technologies: string[];
  createdAt: Date;
}

export default Offers;
