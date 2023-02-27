import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ btnText, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button className='py-2 px-6 bg-s-yellow hover:bg-yellow-400 text-b font-bold tracking-wider rounded w-fit'>
        {btnText}
      </button>
    </Link>
  );
};

export default Button;