import React from "react";

interface FinputProps {
  label?: String;
  display?: String;
  placeholder?: String;
  className?: String;
  value?:any;
  min?:String;
  rows?:String;
  id?:String;
  name?:String;
  onChange?: any;
  validations?: any;
  register?: any;
  required?: any;
  error?: any;
  disabled?: boolean,
  readonly?: boolean,
}

export const FTextarea = ({
  display = "flex",
  label = "",
  placeholder = "",
  className = "",
  id="",
  name="",
  value="",
  min="0",
  rows="2",
  onChange = () => {
  },
  validations,
  register,
  required,
  error,
  disabled = false,
  readonly = false,
  ...otherProps
}: FinputProps) => {
  return (
    <div className={`f-input-group ${display ? `d-${display}` : ""}`}>
      {label && <label className="w-100">{label}</label>}
      <textarea
        className={`f-input-control ${className}`}
        placeholder={`${placeholder}`}
        onChange={onChange}
        disabled={disabled}
        readOnly={readonly}
      ></textarea>
    </div>
  );
};
