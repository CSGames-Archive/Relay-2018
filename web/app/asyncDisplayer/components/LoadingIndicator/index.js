import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

const LoadingIndicator = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      minHeight: '100%',
    }}
  >
    <CircularProgress />
  </div>
);

export default LoadingIndicator;
