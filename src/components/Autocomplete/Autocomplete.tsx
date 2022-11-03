import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
/* 
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
  input: {
    width: "80%",
    height: "30px",
    padding: "10px 20px",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    border: "1px solid #aaa",
    borderRadius: "4px",
  },
  inputFocused: {
    outlineStyle: "none",
  },
  // add other styling here...
}); */

const AutosuggestInput = ({ value, onChange, onBlur, setField, data }) => {
  const [cities, setCities] = useState<string[]>(data);
  const [selectCity, setSelectCity] = useState({
    city: "",
  });
  /*  const theme = useStyles(); */

  const onSuggestionsFetchRequested = ({ value }) => {
    setCities(filtrarPresidentes(value));
  };

  const filtrarPresidentes = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    var filtrado = data?.filter((city) => {
      if (
        city
          ?.toLowerCase()
          ?.normalize("NFD")
          ?.replace(/[\u0300-\u036f]/g, "")
          ?.includes(inputValue)
      ) {
        return city;
      }
    });

    return inputLength === 0 ? [] : filtrado;
  };

  const onSuggestionsClearRequested = () => {
    setCities([]);
  };

  const getSuggestionValue = (suggestion) => {
    return `${suggestion}`;
  };

  const onSelectCity = (city) => {
    setSelectCity(city);
    setField("city", city);
  };

  const renderSuggestion = (suggestion) => (
    <div
      className="sugerencia"
      id="sugerencia"
      onClick={() => onSelectCity(suggestion)}
    >
      {`${suggestion}`}
    </div>
  );

  const eventEnter = (e) => {
    if (e.key == "Enter") {
      var split = e.target.value.split("-");
      var presidente = {
        presidente: split[0].trim(),
        pais: split[1].trim(),
      };
      onSelectCity(presidente);
    }
  };

  const inputProps = {
    placeholder: "Elige una ciudad",
    value,
    onChange,
    onBlur,
    id: "city",
    name: "city",
  };

  return (
    <>
      <Autosuggest
        suggestions={cities}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={eventEnter}
        /* theme={theme} */
      />
    </>
  );
};

export default AutosuggestInput;
