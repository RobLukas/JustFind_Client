import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Salary from '../Salary';
import SalaryProps from '../Salary.interface';

describe('<Salary />', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const props: SalaryProps = {
      salary: {
        from: 10000,
        to: 20000,
        currency: 'PLN',
      },
    };
    const tree = renderer.create(<Salary {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with salary props', () => {
    const props: SalaryProps = {
      salary: {
        from: 1000,
        to: 2000,
        currency: 'PLN',
      },
    };
    const { container, getByText } = render(<Salary {...props} />);
    expect(getByText('1000 - 2000 PLN')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <span
        class="sc-gtssRu ibqKak"
      >
        1000 - 2000 PLN
      </span>
    `,
    );
  });
});
