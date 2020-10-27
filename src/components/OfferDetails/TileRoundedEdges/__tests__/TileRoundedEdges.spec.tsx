import React from 'react';
import { cleanup, render } from '@testing-library/react';

import lightMode from '@styles/theme/lightMode';
import { ThemeProvider } from 'styled-components';
import TileRoundedEdges from '../TileRoundedEdges';
import TileRoundedEdgesProps from '../TileRoundedEdges.interface';

describe('<TileRoundedEdges />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { children }: TileRoundedEdgesProps = { children: 'html' };

    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <TileRoundedEdges>{children}</TileRoundedEdges>
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
