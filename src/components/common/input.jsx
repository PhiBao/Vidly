import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && (
        <div className="alert text-danger px-0 mb-0 fade show">{error}</div>
      )}
    </div>
  );
};

export default Input;
