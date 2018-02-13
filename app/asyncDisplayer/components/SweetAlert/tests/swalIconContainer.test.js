import React from 'react';
import { shallow } from 'enzyme';
import SwalIconContainer from '../swalIconContainer';

let wrapper;
describe('given a swalIconContainer', () => {
  const child = 'achild';
  beforeEach(() => {
    wrapper = shallow(<SwalIconContainer>{child}</SwalIconContainer>);
  });
  it('should display child', () => {
    expect(wrapper.contains(child)).toBe(true);
  });
  it('should have div', () => {
    expect(wrapper.find('SwalIconContainer').first().exists()).toBe(true);
  });
});
