import React from 'react';
import PropTypes from 'prop-types';
import TiWarningOutline from 'react-icons/lib/ti/warning-outline';

const ErrorAlert = ({ message }) => (
  <div className="error-alert-container">
    <div className="error-alert">
      <TiWarningOutline className="error-icon" />
      <span className="error-message">{message}</span>
    </div>
  </div>
);

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorAlert;
