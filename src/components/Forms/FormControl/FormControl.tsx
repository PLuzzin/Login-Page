import React from 'react';

import './FormControl.css';

interface Prop {
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormControl({type, placeholder, onChange}: Prop){
  return (
    <input type={type} className="form-control" placeholder={placeholder} onChange={onChange} />
    
  );
}

export function RadioButton({children}: Prop){
  return (
    <label className="container">
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
      <span className="radio-label">{children}</span>
    </label>
  );
}