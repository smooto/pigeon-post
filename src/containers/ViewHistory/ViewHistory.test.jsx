import React from 'react';
import { shallow } from 'enzyme';
import ViewHistory from './ViewHistory';

describe('ViewHistory component', () => {
  it('renders ViewHistory', () => {
    const wrapper = shallow(<ViewHistory history={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
