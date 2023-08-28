import React from 'react';

const Button = ({ children, variant, className = '', disabled, ...props }) => {
  let baseClassName = `px-4 py-2 text-white ${className}`;

  if (variant === 'rounded') {
    baseClassName += ' rounded-full';
  }

  if (variant === 'outline') {
    baseClassName += ' border border-blue-500 text-blue-500 bg-transparent';
  } else {
    baseClassName += ' bg-blue-500';
  }

  const disabledClassName = disabled ? 'bg-gray-500 text-white opacity-50 cursor-not-allowed' : '';

  return (
    <button className={`${baseClassName} ${disabledClassName}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
