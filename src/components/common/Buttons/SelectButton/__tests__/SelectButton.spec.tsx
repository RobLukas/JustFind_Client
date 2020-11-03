import React from 'react';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import lightMode from 'styles/theme/lightMode';
import SelectButton from '../SelectButton';

describe('<SelectButton />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const collection = ['1', '2'];
    const onChange = jest.fn();
    const value = collection[0];

    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <SelectButton
          value={value}
          collection={collection}
          onChange={onChange}
        />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
