import React from 'react';
import { shallow } from 'enzyme';
import { SwalButton } from '../swalButton';

let wrapper;
describe('given SwalButton', () => {
  it('should throw when no props', () => {
    expect(() => {
      shallow(<SwalButton />);
    }).toThrow();
  });
  describe('with valid props', () => {
    const text = 'aText';
    const onClick = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<SwalButton text={text} onClick={onClick} />);
    });
    it('should display swal button container', () => {
      expect(wrapper.find('SwalButtonContainer').length).toBe(1);
    });
    it('should display text', () => {
      expect(wrapper.contains(text)).toBe(true);
    });
    it('should display div with class', () => {
      expect(wrapper.find('div').first().hasClass('swal-button__loader')).toBe(true);
    });
  });
});
