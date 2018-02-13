import React from 'react';
import { shallow } from 'enzyme';
import { SwalIconError } from '../swalIconError';

let wrapper;
describe('given SwalIconError', () => {
  beforeEach(() => {
    wrapper = shallow(<SwalIconError />);
  });
  it('should exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
