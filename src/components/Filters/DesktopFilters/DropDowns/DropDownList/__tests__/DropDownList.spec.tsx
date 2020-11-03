import React from 'react';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';

import { DotsButton } from 'components/common';
import lightMode from 'styles/theme/lightMode';
import DropDownList from '../DropDownList';
import { ThemeProvider } from 'styled-components';

describe('<DropDownList />', () => {
  afterEach(cleanup);
  it('render correcly', () => {
    const collection = ['1', '2', '3'];
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <DropDownList ButtonComponent={DotsButton} collection={collection} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
