import TechnologyType from '@api/technologyCollection';

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
  isNew: boolean;
  addedDate: number;
}

export default OfferDetailsProps;
