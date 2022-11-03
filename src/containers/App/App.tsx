import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useFormik } from "formik";
import * as Yup from "yup";
import AutosuggestInput from "../../components/Autocomplete/Autocomplete";
import Input from "../../components/atoms/Input/Input";
import { FormContainer } from "./App.styles";
import { Autocomplete, TextField } from "@mui/material";
import MuiAutocomplete from "../../components/Autocomplete/MuiAutocomplete";
import Date from "../../components/atoms/Date/Date";
import SelectMui from "../../components/atoms/Select/Select";

function App() {
  /**
   * Nombre
Apellidos
Celular
Ciudad (autocomplétable)
Fecha nacimiento
Tipo de documento
Numero documento
Contraseña
   */
  const formik = useFormik({
    // Declaración de los campos del formulario
    initialValues: {
      name: "",
      lastName: "",
      city: "",
      tel: "",
      birthDate: "",
      documentType: "",
      documentNumber: "",
      password: "",
    },
    // Declaración de las reglas de validación
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(20, "Debe ser menor a 20 caracteres")
        .min(2, "Debe ser mayor a 2 caracteres")
        .required("Campo requerido")
        .test("test-name", "El nombre debe ser unicamente letras", (value) => {
          return /^[a-zA-Z]+$/.test(value);
        }),
      lastName: Yup.string()
        .max(32, "Debe ser menor a 32 caracteres")
        .min(4, "Debe ser mayor a 4 caracteres")
        .test("test-name", "El nombre debe ser unicamente letras", (value) => {
          return /^[a-zA-Z]+$/.test(value);
        })
        .required("El apellido es obligatorio"),
      city: Yup.string()
        .required("La ciudad es obligatoria")
        .test("test-name", "El nombre debe ser unicamente letras", (value) => {
          return /^[a-zA-Z]+$/.test(value);
        }),
      tel: Yup.number()
        /* .test("test-phone", "Numero no valido", (value) => {
          if (value.length === 10) {
            return true;
          }

          return false;
        })
        .test(
          "test-phone",
          "El telefono debe ser unicamente numeros",
          (value) => {
            return /^[0-9]+$/.test(value);
          }
        ) */
        .required("El teléfono es obligatorio"),
      birthDate: Yup.date().required("La fecha de nacimiento es obligatoria"),
      documentType: Yup.string().required(
        "El tipo de documento es obligatorio"
      ),
      documentNumber: Yup.number()
        /* .test(
          "test-document",
          "El telefono debe ser unicamente numeros",
          (value) => {
            return /^[0-9]+$/.test(value);
          }
        ) */
        .required("El número de documento es obligatorio"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(32, "La contraseña debe tener máximo 32 caracteres")
        .required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values: any) => console.log(values),
  });

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <FormContainer>
        <h1>Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <Input
            title="Nombre"
            name="name"
            type="text"
            placeholder="Nombre"
            formik={formik}
          />
          <Input
            title="Apellido(s)"
            name="lastName"
            type="text"
            placeholder="Apellido(s)"
            formik={formik}
          />
          <div>
            {/* <label htmlFor="city">Ciudad</label> */}
            <AutosuggestInput
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              setField={formik.setFieldValue}
            />
            {formik.touched.city && formik.errors.city && (
              <span className="error">Error</span>
            )}
          </div>
          <Input
            title="Teléfono"
            name="tel"
            type="tel"
            placeholder="Teléfono"
            formik={formik}
          />
          <Date
            title="Fecha de nacimiento"
            name="birthDate"
            type="date"
            placeholder="Fecha de nacimiento"
            formik={formik}
          />
          <SelectMui
            title="Tipo de documento"
            name="documentType"
            type="text"
            placeholder="Tipo de documento"
            formik={formik}
            options={[
              "Cédula de ciudadanía",
              "Cédula de extranjería",
              "Pasaporte",
              "NIT",
              "Otro",
            ]}
          />

          <Input
            title="Número de documento"
            name="documentNumber"
            type="number"
            placeholder="Número de documento"
            formik={formik}
          />

          <Input
            title="Contraseña"
            name="password"
            type="password"
            placeholder="Contraseña"
            formik={formik}
          />

          <button type="submit">Enviar</button>
        </form>
      </FormContainer>
    </div>
  );
}

export default App;
