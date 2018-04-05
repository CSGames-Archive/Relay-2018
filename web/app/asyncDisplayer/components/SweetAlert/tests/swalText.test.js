import React from 'react';
import { shallow } from 'enzyme';
import { SwalText } from '../swalText';

let wrapper;
const child = 'achild';
describe('given a SwalText', () => {
  beforeEach(() => {
    wrapper = shallow(<SwalText>{child}</SwalText>);
  });
  it('should have swal-text classname in p', () => {
    expect(wrapper.find('p').first().hasClass('swal-text')).toBe(true);
  });
  it('should have child', () => {
    expect(wrapper.contains(child)).toBe(true);
  });
});
