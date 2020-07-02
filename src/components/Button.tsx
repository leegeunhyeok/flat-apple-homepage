import React from 'react';
import './Button.scss';

export interface ButtonProps {
  icon?: string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, icon } = props;
  const style = {
    backgroundImage: `url(${icon})`
  };

  return (
    <button className="Button" style={icon ? style : {}}>{children}</button>
  );
}

export default Button;
