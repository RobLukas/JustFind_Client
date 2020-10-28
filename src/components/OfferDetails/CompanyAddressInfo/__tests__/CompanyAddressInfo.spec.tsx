import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import CompanyAddressInfoProps from '../CompanyAddressInfo.interface';
import CompanyAddressInfo from '../CompanyAddressInfo';
import lightMode from '@styles/theme/lightMode';

describe('<CompanyAddressInfo />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { children, icon }: CompanyAddressInfoProps = {
      children: 'address',
      icon: SvgIcon,
    };
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <CompanyAddressInfo icon={icon}>{children}</CompanyAddressInfo>
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
