import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Grid from 'material-ui/Grid';
import { ErrorComponent } from '../ErrorComponent/index';
import LoadingIndicator from '../LoadingIndicator/index';

export const LoadingError = ({
                               loading,
                               error,
                               errorNode,
                               children,
                               ...other
                             }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return errorNode;
  }

  const childrenWithProps = React.Children.map(children,
    (child) => React.cloneElement(child, {
      ...other,
    })
  );
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column', // TODO extract direction to pass has param, maybe default could be column
      }}
    >
      {childrenWithProps}
    </div>
  );
};

LoadingError.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  errorNode: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

LoadingError.defaultProps = {
  errorNode: <ErrorComponent />,
};

export default LoadingError;
