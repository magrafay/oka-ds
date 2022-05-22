import React from "react";

interface FinputProps {
  name?: String;
  selectedFieldName?: String;
  prefix?: String;
  label?: String;
  setFieldName?: any;
  onChange?: any;
  id?:any;
  className?:String;
  checked?:Boolean;
}

export const FThemeBuilderCheckbox = ({
  name,
  label,
  prefix = "",
  selectedFieldName,
  setFieldName,
  onChange = () => {
  },
  id="",
  className="",
  checked=false,
}: FinputProps) => {
  return (
    <div className={`f-input-group f-input-checkbox-group`}>
      <div className="f-input-checkbox">
        <input
          type="checkbox"
          id={`${name}_id`}
          name={`${name}`}
          checked={selectedFieldName === name ? true : false}
          onChange={onChange}
        />
        <label htmlFor={`${name}_id`}>{label}</label>
      </div>
    </div>
  );
};
