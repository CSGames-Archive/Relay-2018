import React from 'react';
import { shallow } from 'enzyme';
import { SwalFooter } from '../swalFooter';

let wrapper;
describe('given SwalFooter', () => {
  beforeEach(() => {
    wrapper = shallow(<SwalFooter />);
  });
  it('should display div with swal-footer classname', () => {
    expect(wrapper.find('div').first().hasClass('swal-footer')).toBe(true);
  });
  describe('with child', () => {
    const child = 'aChild';
    beforeEach(() => {
      wrapper = shallow(<SwalFooter>{child}</SwalFooter>);
    });
    it('should display child', () => {
      expect(wrapper.contains(child)).toBe(true);
    });
  });
});
