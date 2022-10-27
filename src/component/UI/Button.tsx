import React from 'react';
import SerachIcon from '../../img/search.svg';

type ButtonProps = {
  children: string;
  onClick: () => any;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      <img src={SerachIcon} alt="search" />
      {children}
    </button>
  );
};

export default Button;
