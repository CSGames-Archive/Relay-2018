import React from 'react';
import { shallow, mount } from 'enzyme';

import { LoadingError } from '../index';
import LoadingIndicator from '../../LoadingIndicator/index';

describe('<LoadingError />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <LoadingError
        loading
        error={false}
        entity={{}}
      >test</LoadingError>
    );
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <LoadingError
        loading={false}
        error={{ message: 'Loading failed!' }}
        entity={{}}
      >test</LoadingError>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render children if loading was successful from entity', () => {
    const children = 'aChild';
    const renderedComponent = shallow(
      <LoadingError
        loading={false}
        error={false}
        entity={{ foo: 'bar' }}
        test
      >
        <div>{children}</div>
      </LoadingError>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render children if loading was successful from data', () => {
    const children = 'aChild';
    const renderedComponent = shallow(
      <LoadingError
        loading={false}
        error={false}
        data="test"
        test
      >
        <div>{children}</div>
      </LoadingError>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const child = <p>test</p>;
    const renderedComponent = shallow(
      <LoadingError
        error={false}
        loading={false}
        entity={{}}
      >
        {child}
      </LoadingError>
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
})
;
