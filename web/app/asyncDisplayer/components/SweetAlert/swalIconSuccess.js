import React from 'react';
import './swalIconSuccessStyle';

export const SwalIconSuccess = () => (
  <div className="swal-icon swal-icon--success">
    <div className="swal-icon--success__line swal-icon--success__line--long" />
    <div className="swal-icon--success__line swal-icon--success__line--tip" />
    <div className="swal-icon--success__ring" />
    <div
      className="swal-icon--success__hide-corners"
      style={{
        width: '6px',
        backgroundColor: 'inherit',
      }}
    />
  </div>
);
