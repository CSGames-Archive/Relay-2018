import React from 'react';
import { shallow } from 'enzyme';
import { SwalIconSuccess } from '../swalIconSuccess';

let wrapper;
describe('given SwalIconSuccess', () => {
  beforeEach(() => {
    wrapper = shallow(<SwalIconSuccess />);
  });
  it('should exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
