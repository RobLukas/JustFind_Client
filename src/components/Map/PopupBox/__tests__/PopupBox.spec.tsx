import { cleanup, render } from '@testing-library/react';
import offers from 'api/offers';
import React from 'react';
import 'jest-styled-components';
import PopupBox from '../PopupBox';

describe('<PopupBox />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const props = offers[0];
    const { container } = render(<PopupBox {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
