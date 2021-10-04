import PropTypes from 'prop-types';

import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string]),
};
export default Filter;
