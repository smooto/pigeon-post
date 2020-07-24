import React from 'react';
import { shallow } from 'enzyme';
import RequestBar from './RequestBar';

describe('RequestBar component', () => {
  it('renders RequestBar', () => {
    const wrapper = shallow(<RequestBar 
      onUrlChange={() => {}}
      onTypeChange={() => {}}
      onBodyChange={() => {}}
      onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
