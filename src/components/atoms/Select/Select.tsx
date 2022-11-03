import { ErrorMessage, useField } from "formik";
import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

interface Props {
  title: string;
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

const SelectMui = ({
  title,
  name,
  type,
  placeholder = "",
  formik,
  haveLabel = false,
  options,
  ...props
}) => {
  return (
    <InputContainer>
      {haveLabel && <label htmlFor={name}>{title}</label>}
      <Select
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        inputProps={props}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {formik.touched[name] && formik.errors[name] && (
        <span className="error">{`${formik?.errors[name]}`}</span>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    margin-bottom: 0.5rem;
  }
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    color: #e0e0e0;

    &:focus {
      color: #ffff;
    }
  }

  .error {
    color: red;
  }
`;

export default SelectMui;
