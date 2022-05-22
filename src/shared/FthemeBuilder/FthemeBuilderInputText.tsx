import React from "react";

interface FinputProps {
  label?: String;
  display?: String;
  placeholder?: String;
  className?: String;
  type?: any;
  id?: String;
  name?: String;
  value?: any;
  min?: String;
  max?: String;
  onChange?: any;
  validations?: any;
  register?: any;
  required?: any;
  error?: any;
  disabled?: boolean;
  readonly?: boolean;
}

export const FInputText = ({
  type = "text",
  display = "flex",
  label = "",
  placeholder = "",
  className = "",
  name = "",
  id = "",
  value = "",
  min = "0",
  max = "10",
  onChange = () => {},
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
      <input
        className={`f-input-control ${className}`}
        placeholder={`${placeholder}`}
        type={type}
        {...(register
          ? register(name, { ...validations })
          : { value: value, onChange: onChange })}
        disabled={disabled}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
};
