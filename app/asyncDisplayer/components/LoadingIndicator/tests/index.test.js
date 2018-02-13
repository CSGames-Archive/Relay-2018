import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render circular progress', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />
    );
    expect(renderedComponent.find('withStyles(CircularProgress)').length).toBe(1);
  });
});
