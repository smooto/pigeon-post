import React from 'react';
import { shallow } from 'enzyme';
import MakeRequest from './MakeRequest';

describe('MakeRequest component', () => {
  it('renders MakeRequest', () => {
    const wrapper = shallow(<MakeRequest passData={() => {}} passRequest={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
