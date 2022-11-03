import { ErrorMessage, useField } from "formik";
import { Input as InputMaterial } from "@mui/material";
import styled from "styled-components";

interface Props {
  title: string;
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

const Input = ({
  title,
  name,
  type,
  placeholder = "",
  formik,
  haveLabel = false,
  ...props
}) => {
  return (
    <InputContainer>
      {haveLabel && <label htmlFor={name}>{title}</label>}
      <InputMaterial
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...props}
      />
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
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    color: #e0e0e0;

    &:focus {
      color: #ffff;
    }
  }
`;

export default Input;
