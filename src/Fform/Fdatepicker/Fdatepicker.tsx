import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

interface FdatepickerProps {
  label?: String;
  display?: String;
  placeholderText?: string;
  className?: String;
  inputSize?: String;
  id?: String;
  name?: string;
  value?: any;
  selected?: any;
  dateFormat?: any;
  timeFormat?: any;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  timeIntervals?: number;
  onChange?: any;
  onSelect?: any;
  prefix?: any;
  prefixAction?: any;
  postfix?: any;
  postfixAction?: any;
  validations?: any;
  register?: any;
  required?: any;
  disabled?: boolean;
  readonly?: boolean;
  control?: any;
  error?: any;
}

export const FDatepicker = ({
  label,
  placeholderText = "MM D, YYYY",
  display = "block",
  className = "",
  inputSize = "",
  name = "",
  id = "",
  value = "",
  prefix,
  prefixAction = () => {
    console.log("prefix action");
  },
  postfix,
  postfixAction = () => {
    console.log("postfix action");
  },
  selected,
  showTimeSelect = false,
  showTimeSelectOnly = false,
  timeIntervals = 30,
  dateFormat = "MMMM d, yyyy",
  timeFormat = "HH:mm",
  onChange = () => {},
  onSelect = () => {},
  validations,
  register,
  required,
  error,
  disabled = false,
  readonly = false,
  control,
  ...otherProps
}: FdatepickerProps) => {
  return (
    <>
      <div
        className={`f-input-group f-input-datepicker ${
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
          {control && register ? (
            <Controller
              control={control}
              id={name}
              name={name}
              {...(register ? register(name, { ...validations }) : {})}
              render={({ field: { onChange, name, selected, value } }: any) => {
                return (
                  <DatePicker
                    name={name}
                    className="f-input-control"
                    placeholderText={placeholderText}
                    selected={value || selected}
                    onChange={onChange}
                    showTimeSelect={showTimeSelect}
                    showTimeSelectOnly={showTimeSelectOnly}
                    {...(showTimeSelect
                      ? {
                          timeFormat: timeFormat,
                          dateFormat: `${dateFormat} ${timeFormat}`,
                          timeIntervals: timeIntervals,
                        }
                      : { dateFormat: dateFormat })}
                    {...otherProps}
                  />
                );
              }}
            />
          ) : (
            <DatePicker
              name={name}
              className="f-input-control"
              placeholderText={placeholderText}
              selected={selected}
              onChange={onChange}
              showTimeSelect={showTimeSelect}
              showTimeSelectOnly={showTimeSelectOnly}
              {...(showTimeSelect
                ? {
                    timeFormat: timeFormat,
                    dateFormat: `${dateFormat} ${timeFormat}`,
                    timeIntervals: timeIntervals,
                  }
                : { dateFormat: dateFormat })}
              {...otherProps}
            />
          )}
        </div>
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
        {error && (
          <p className={`${error ? "input-validation-error" : ""}`}>
            {error ? error : undefined}
          </p>
        )}
      </div>
    </>
  );
};
