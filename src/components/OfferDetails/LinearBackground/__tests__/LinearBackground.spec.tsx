import { cleanup, render } from '@testing-library/react';
import React from 'react';
import LinearBackground from '../LinearBackground';
import LinearBackgroundProps from '../LinearBackground.interface';

describe('<LinearBackground />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { technology }: LinearBackgroundProps = { technology: 'JS' };

    const { container } = render(<LinearBackground technology={technology} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
