import React from 'react';
import { shallow } from 'enzyme';
import { ErrorComponent } from '../index';

describe('given error component', () => {
  it('should render p', () => {
    const wrapper = shallow(<ErrorComponent />);
    expect(wrapper.find('p').length).toEqual(1);
  });
});
