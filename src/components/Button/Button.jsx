import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, handleClick }) => {
  return (
    <div>
      <input
        type="button"
        name="requestType"
        onClick={handleClick}
        value={value} />
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
