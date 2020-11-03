import React from 'react';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import lightMode from 'styles/theme/lightMode';
import CategoryButton from '../CategoryButton';

describe('<CategoryButton />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const children = 'text';

    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <CategoryButton>{children}</CategoryButton>
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
