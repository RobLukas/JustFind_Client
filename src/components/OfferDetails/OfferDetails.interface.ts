import TechnologyType from 'api/technologyCategory';

interface OfferDetailsProps {
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

export default OfferDetailsProps;
