import React from 'react';
import { shallow } from 'enzyme';
import { SwalIcon } from '../swalIcon';
import { SwalTitle } from '../swalTitle';
import { SwalText } from '../swalText';
import { SwalFooter } from '../swalFooter';
import { SwalIconSuccess } from '../swalIconSuccess';
import { SwalIconError } from '../swalIconError';

describe('given a swal icon', () => {
  const title = 'aTitle';
  const type = 'aType';
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SwalIcon title={title} type={type} />);
  });
  it('should not contain SwalIconSuccess', () => {
    expect(wrapper.containsMatchingElement(<SwalIconSuccess />)).toBe(false);
  });
  it('should not contain SwalIconError', () => {
    expect(wrapper.contains(<SwalIconError />)).toBe(false);
  });
  it('should contain swal title', () => {
    expect(wrapper.contains(<SwalTitle>{title}</SwalTitle>)).toBe(true);
  });
  it('should contain swal text', () => {
    expect(wrapper.contains(<SwalText></SwalText>)).toBe(true);
  });
  it('should contain swal footer', () => {
    expect(wrapper.contains(<SwalFooter></SwalFooter>)).toBe(true);
  });
  describe('with a text', () => {
    const text = 'aText';
    beforeEach(() => {
      wrapper = shallow(<SwalIcon title={title} type={type} text={text} />);
    });
    it('should contain swal text', () => {
      expect(wrapper.contains(<SwalText>{text}</SwalText>)).toBe(true);
    });
  });
  describe('with a footer', () => {
    const footer = 'aFooter';
    beforeEach(() => {
      wrapper = shallow(<SwalIcon title={title} type={type} footer={footer} />);
    });
    it('should contain swal footer', () => {
      expect(wrapper.contains(<SwalFooter>{footer}</SwalFooter>)).toBe(true);
    });
  });
  describe('with success type', () => {
    beforeEach(() => {
      wrapper = shallow(<SwalIcon title={title} type="success" />);
    });
    it('should contain swal success icon', () => {
      expect(wrapper.contains(<SwalIconSuccess />)).toBe(true);
    });
  });
  describe('with error type', () => {
    beforeEach(() => {
      wrapper = shallow(<SwalIcon title={title} type="error" />);
    });
    it('should contain swal error icon', () => {
      expect(wrapper.contains(<SwalIconError />)).toBe(true);
    });
  });
});
