import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ className, outline, children }) => {
  return (
    <button className={classNames('button', className, { 'button--outline': outline })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};

export default Button;
