// Exhibit.js
import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Exhibit.css'; // Assume you have some default styles here

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
};

Exhibit.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Exhibit;
