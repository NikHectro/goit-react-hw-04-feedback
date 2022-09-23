import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

export default Section;

Section.protoType = {
  title: PropTypes.string,
  children: PropTypes.node,
};
