import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { SvgIcon } from '@material-ui/core';

import lightMode from 'styles/theme/lightMode';
import NavLink from '../NavLink';
import NavLinkProps from '../NavLink.interface';

describe('<NavLink />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const props: NavLinkProps = { icon: SvgIcon, desc: 'link desc', link: '/' };
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <NavLink {...props} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
