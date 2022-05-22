import React from "react";

interface FinputProps {
  name?: String;
  selectedFieldName?: String;
  prefix?: String;
  label?: String;
  setFieldName?: any;
  radioChangeHandler?: any;
  setSelectedHeading?: any;
  value?:any;
}

export const FThemeBuilderRadio = ({
  name,
  label,
  prefix = "",
  selectedFieldName,
  setFieldName,
  radioChangeHandler = () => {
  },
  setSelectedHeading,
  value=""
}: FinputProps) => {
  return (
    <div className={`f-input-group f-input-radio-group`}>
      <div className="f-input-radio">
        <input
          type="radio"
          id={`${name}_id`}
          name={`${name}`}
          checked={selectedFieldName === name ? true : false}
          onChange={() => {
            setFieldName(name);
            setSelectedHeading(`${prefix ? prefix + " " : ""}${label}`);
            radioChangeHandler();
          }}
        />
        <label htmlFor={`${name}_id`}>{label}</label>
      </div>
    </div>
  );
};
