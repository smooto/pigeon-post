import React from 'react';
import { shallow } from 'enzyme';
import ViewResults from './ViewResults';

describe('ViewResults component', () => {
  it('renders ViewResults', () => {
    const wrapper = shallow(<ViewResults data={[{}]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
