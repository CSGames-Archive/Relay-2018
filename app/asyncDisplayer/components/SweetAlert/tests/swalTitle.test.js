import React from 'react';
import { shallow } from 'enzyme';
import { SwalTitle } from '../swalTitle';

let wrapper;
const child = 'aChild';
describe('given a SwalTitle', () => {
  beforeEach(() => {
    wrapper = shallow(<SwalTitle>{child}</SwalTitle>);
  });
  it('should have child', () => {
    expect(wrapper.contains(child)).toBe(true);
  });
  it('should have swal-title classname', () => {
    expect(wrapper.find('h3').first().hasClass('swal-title')).toBe(true);
  });
});
