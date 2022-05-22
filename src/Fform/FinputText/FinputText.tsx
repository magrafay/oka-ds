import React from "react";

interface FinputProps {
  label?: String;
  display?: String;
  placeholder?: String;
  className?: String;
  type?: String;
  inputSize?: String;
  id?: String;
  name?: String;
  value?: any;
  min?: String;
  max?: String;
  onChange?: any;
  prefix?: any;
  prefixAction?: any;
  postfix?: any;
  postfixAction?: any;
  validations?: any;
  register?: any;
  required?: any;
  error?: any;
  disabled?: boolean;
  readonly?: boolean;
}

export const FInputText = ({
  label,
  placeholder = "",
  type = "text",
  display = "block",
  className = "",
  inputSize = "",
  name = "",
  id = "",
  value = "",
  min = "0",
  max = "10",
  prefix,
  prefixAction = () => {
    console.log("prefix action");
  },
  postfix,
  postfixAction = () => {
    console.log("postfix action");
  },
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
    <>
      <div
        className={`f-input-group ${
          display ? `d-${display}` : ""
        } ${className} ${inputSize} `}
      >
        {label && (
          <label className="f-input-label">
            {label}{" "}
            {validations?.required && <span className="required"></span>}
          </label>
        )}
        <div className="f-input-wrap">
          {prefix && (
            <div
              className={`f-input-group-prepend ${
                prefixAction ? "has-action" : ""
              }`}
              onClick={() => prefixAction()}
              {...otherProps}
            >
              {prefix}{" "}
            </div>
          )}
          <input
            className={`f-input-control`}
            name={name}
            placeholder={`${placeholder}`}
            {...(register
              ? register(name, { ...validations })
              : { value: value, onChange: onChange })}
            type={type}
            disabled={disabled}
            readOnly={readonly}
            {...otherProps}
          ></input>
          {postfix && (
            <div
              className={`f-input-group-append ${
                postfixAction ? "has-action" : ""
              }`}
              onClick={() => postfixAction()}
              {...otherProps}
            >
              {" "}
              {postfix}
            </div>
          )}
        </div>
        {error && (
          <p className={`${error ? "input-validation-error" : ""}`}>
            {error ? error : undefined}
          </p>
        )}
      </div>
    </>
  );
};
