import * as React from 'react';

import './form-input.styles.css';

interface FormInputProps {
  name: string,
  type: string,
  value: string,
  label: string,
  onChange: (e: any) => void,
  required?: any,
}

const FormInput = ({onChange, label, ...otherProps}: FormInputProps) => (
  <div className="group">
    {
      label ?
        (<label
            className={`${otherProps.value.length ? 'shrink' : ''}
            form-input-label`} >
          {label}
        </label>)
        : null
    }
    <input className="form-input" onChange={onChange} {...otherProps} />
  </div>
);

export {
  FormInput,
};
