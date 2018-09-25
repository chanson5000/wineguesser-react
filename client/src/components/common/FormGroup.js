import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({
                     label, name, selectionType, selections
                   }) => {

  if (selectionType === 'select') {
    const selectOptions = Object.entries(selections).map(([selection, selectionLabel]) => (
        <option value={selection}>{selectionLabel}</option>
    ));
    return (
        <div className="form-group row text-left justify-content-center">
          <label className="col-form-label col-form-label col-md-2">
            {label}
          </label>
          <div className="col-md-3">
            <select className="form-control">
              <option value="none" selected>Select {label}</option>
              {selectOptions}
            </select>
          </div>
        </div>
    )
  } else {
    const selectOptions = Object.entries(selections).map(([selection, selectionLabel]) => (
        <div className="form-check" key={selection}>
          <input className="form-check-input" type={selectionType} name={name} id={selection}
                 value={selection}/>
          <label className="form-check-label" htmlFor={selection}>
            {selectionLabel}
          </label>
        </div>
    ));
    return (
        <fieldset className="form-group text-left">
          <div className="row justify-content-center">
            <legend className="col-form-label col-form-label col-md-2">
              {label}
            </legend>
            <div className="col-md-3">
              {selectOptions}
            </div>
          </div>
        </fieldset>
    )
  }
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectionType: PropTypes.oneOf(['radio', 'checkbox', 'select']).isRequired,
  selections: PropTypes.objectOf(PropTypes.string).isRequired
};

export default FormGroup;