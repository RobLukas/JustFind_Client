import TechnologyType from './technologyCollection';
import LinearBackgroundTechEnum from 'styles/linearBackgroundTechEnum';
import {
  dotNetIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  mobileIcon,
  phpIcon,
  cPlusPlusIcon,
  pythonIcon,
  testingIcon,
  blockchainIcon,
  dataIcon,
} from 'assets/tech-icons';

interface TechnologyCollection {
  linearBackgroundColor: string;
  markerIcon: string;
}

const getTechnologyResources = (tech: TechnologyType): TechnologyCollection => {
  switch (tech) {
    case 'JS':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: jsIcon,
      };
    case 'Java':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: javaIcon,
      };
    case 'Data':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: dataIcon,
      };
    case 'Blockchain':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: blockchainIcon,
      };
    case 'Html':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: htmlIcon,
      };
    case 'Mobile':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: mobileIcon,
      };
    case 'PHP':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: phpIcon,
      };
    case 'Python':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: pythonIcon,
      };
    case 'Testing':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: testingIcon,
      };
    case '.Net':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: dotNetIcon,
      };
    case 'C++':
      return {
        linearBackgroundColor: LinearBackgroundTechEnum[tech],
        markerIcon: cPlusPlusIcon,
      };
  }
};

export default getTechnologyResources;
