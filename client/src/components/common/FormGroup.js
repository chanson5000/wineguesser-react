import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({
                     label, name, selectionType, selections
                   }) => {

  if (selectionType === 'select') {
    const selectOptions = selections.map((selection) => (
      <option
        key={selection.value}>
        {selection.label}
        </option>
    ));
    return (
      <div className="form-group row text-left justify-content-center">
        <label className="col-form-label col-form-label col-md-2">
          {label}
        </label>
        <div className="col-md-3">
          <select className="form-control">
            <option value="none">Select {label}</option>
            {selectOptions}
          </select>
        </div>
      </div>
    )
  } else {
    const selectOptions = selections.map((selection) => (
      <div className="form-check" key={selection.value}>
        <input className="form-check-input"
               type={selectionType}
               name={name}
               id={selection.value}
               value={selection.value}/>
        <label className="form-check-label" htmlFor={selection.value}>
          {selection.label}
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
  selections: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

export default FormGroup;