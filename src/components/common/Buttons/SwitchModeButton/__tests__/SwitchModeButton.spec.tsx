import React from 'react';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import lightMode from 'styles/theme/lightMode';
import { SwitchModeButton } from 'components/common';

describe('<SwitchModeButton />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const handleSwitchMode = jest.fn();
    const checked = false;

    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <SwitchModeButton
          checked={checked}
          handleSwitchMode={handleSwitchMode}
        />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
