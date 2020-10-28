import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface NavLinkProps {
  icon: OverridableComponent<SvgIconTypeMap>;
  link: string;
  desc: string;
}

export default NavLinkProps;
