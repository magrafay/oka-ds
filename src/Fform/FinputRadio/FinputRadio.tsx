import React from "react";

interface FinputProps {
  label: String;
  name?: any;
  id?: any;
  display?: String;
  className?: String;
  type?: String;
  onChange?: any;
  onClick?: any;
  validations?: any;
  register?: any;
  required?: any;
  error?: any;
  disabled?: boolean;
  readonly?: boolean;
}

export const FInputRadio = ({
  label = "",
  name = label.toLowerCase().split(" ").join(""),
  id = name,
  type = "radio",
  display = "block",
  className = "",
  onChange = () => {},
  onClick = () => {},
  validations,
  register,
  required,
  error,
  disabled = false,
  readonly = false,
  ...otherProps
}: FinputProps) => {
  return (
    <div className={`f-input-radio-group f-input-${display} ${className}`}>
      <div className="f-input-radio">
        <input
          type={`${type}`}
          id={id}
          name={`${name}`}
          onChange={onChange}
          onClick={onChange}
          {...(register
            ? register(name, { ...validations })
            : { onChange: onChange, onClick: onClick })}
          disabled={disabled}
          readOnly={readonly} {...otherProps}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      {error && (
        <p className={`${error ? "input-validation-error" : ""}`}>
          {error ? error : undefined}
        </p>
      )}
    </div>
  );
};
