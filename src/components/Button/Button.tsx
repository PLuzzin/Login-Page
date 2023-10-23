import React from 'react';

import './Button.css';

interface Props {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined
}

export function ButtonPrimary({children, type}: Props) {
  return (
    <button type={type} className="btn btn-primary">
      {children}
    </button>
  );
}

export function ButtonIcon({children, type}: Props) {
  return (
    <button type={type} className="btn btn-icon">
      {children}
    </button>
  );
}

export function ButtonLink({children, type}: Props) {
  return (
    <button type={type} className="btn btn-link">
      {children}
    </button>
  );
}