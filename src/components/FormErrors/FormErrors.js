import React from 'react';

import './style.scss';

const FormErrors = ({ formErrors }) => {
  return (
    <div className="form-errors">
      {
        Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <p key={i} style={{ color: '#EE5F20' }}>
                *{fieldName} {formErrors[fieldName]}
              </p>
            );
          } else {
            return '';
          }
        })
      }
    </div>
  );
}

export default FormErrors;
