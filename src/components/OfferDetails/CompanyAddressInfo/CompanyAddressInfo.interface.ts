import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface CompanyAddressInfoProps {
  children: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}

export default CompanyAddressInfoProps;
