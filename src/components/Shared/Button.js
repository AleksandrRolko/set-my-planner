import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import classNames from "classnames";
import _ from "lodash";

import './Button.css';

const Button = (props) => {
  const { children, className } = props;

  const buttonClasses = classNames('Button', {
    [className]: !_.isEmpty(className),
  });

  return (
    <BootstrapButton {...props} size="lg" className={buttonClasses}>
      {children}
    </BootstrapButton>
  );
}

export default Button;
