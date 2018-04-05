import React from 'react';
import { shallow } from 'enzyme';
import { SwalButtonContainer } from '../swalButtonContainer';

let wrapper;
describe('given SwalButtonContainer', () => {
  it('should throw', () => {
    expect(() => {
      wrapper = shallow(<SwalButtonContainer />);
    }).toThrow();
  });
  describe('with valid props', () => {
    const child = 'aChild';
    beforeEach(() => {
      wrapper = shallow(<SwalButtonContainer>{child}</SwalButtonContainer>);
    });
    it('should have child', () => {
      expect(wrapper.contains(child)).toBe(true);
    });
    it('should have swal-button-container class', () => {
      expect(wrapper.find('div').first().hasClass('swal-button-container')).toBe(true);
    });
  });
});
