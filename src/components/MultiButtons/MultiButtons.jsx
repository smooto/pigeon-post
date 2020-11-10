import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const MultiButtons = ({ label, values, passValue }) => (
  <label>
    {label}
    {
      values.map((value, i) => (
        <Button
          key={i}
          value={value}
          handleClick={(e => passValue(e.target.value))}
        />
      ))
    }
  </label>
);

MultiButtons.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  passValue: PropTypes.func.isRequired
};

export default MultiButtons;
