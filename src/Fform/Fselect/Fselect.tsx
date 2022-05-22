import React from "react";
import Select, { components } from "react-select";
import { Controller } from "react-hook-form";

interface FSelectProps {
  label?: string;
  display?: string;
  placeholder?: string;
  className?: string;
  inputSize?: string;
  onBlur?: any;
  onChange?: any;
  inputRef?: any;
  id?: string;
  name?: string;
  value?: any;
  options?: any;
  formatOptionLabel?: any;
  isOptionDisabled?: boolean;
  prefix?: any;
  prefixAction?: any;
  postfix?: any;
  postfixAction?: any;
  validations?: any;
  register?: any;
  required?: any;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  control?: any;
  error?: any;
}

export const FSelect = ({
  label,
  placeholder = "",
  display = "block",
  className = "",
  name = "",
  id = "",
  value = "",
  inputSize = "",
  prefix,
  prefixAction = () => {
    console.log("prefix action");
  },
  postfix,
  postfixAction = () => {
    console.log("postfix action");
  },
  onBlur = () => {},
  onChange = () => {},
  validations,
  register,
  required,
  isDisabled = false,
  isReadOnly = false,
  options,
  inputRef,
  formatOptionLabel = undefined,
  isOptionDisabled,
  control,
  error,
  ...otherProps
}: FSelectProps) => {
  return (
    <div className={`f-input-group f-input-select ${display ? `d-${display}` : ""} ${className} ${inputSize} `}>
      {label && (
        <label className="f-input-label">
          {label} {validations?.required && <span className="required"></span>}
        </label>
      )}
      <div className="f-input-wrap">
        {prefix && (
          <div className={`f-input-group-prepend ${prefixAction ? "has-action" : ""}`} onClick={() => prefixAction()} {...otherProps}>
            {prefix}{" "}
          </div>
        )}
        {control && register ? (
          <Controller
            control={control}
            id={name}
            name={name}
            {...(register ? register(name, { ...validations }) : {})}
            render={({ field: { onChange, onBlur, value, name, ref, id } }: any) => (
              <Select
                className="f-select"
                classNamePrefix="f-select"
                placeholder={placeholder}
                value={value}
                {...(formatOptionLabel && {
                  formatOptionLabel: FSelectCustomOption,
                })}
                options={options}
                name={name}
                id={id}
                inputRef={ref}
                onChange={onChange}
                onBlur={onBlur}
                isDisabled={isDisabled}
                {...otherProps}
              />
            )}
          />
        ) : (
          <Select
            className="f-select"
            classNamePrefix="f-select"
            value={value}
            placeholder={placeholder}
            {...(formatOptionLabel && {
              formatOptionLabel: FSelectCustomOption,
            })}
            options={options}
            name={name}
            id={id}
            ref={inputRef}
            onChange={onChange}
            onBlur={onBlur}
            isDisabled={isDisabled}
            {...otherProps}
          />
        )}
        {postfix && (
          <div className={`f-input-group-append ${postfixAction ? "has-action" : ""}`} onClick={() => postfixAction()} {...otherProps}>
            {" "}
            {postfix}
          </div>
        )}
      </div>
      {error && <p className={`${error ? "input-validation-error" : ""}`}>{error ? error : undefined}</p>}
    </div>
  );
};

// CUSTOM OPTIONS
const FSelectCustomOption = ({ label, customLabel }: any) => {
  return <div className="f-select-custom-label">{customLabel}</div>;
};
