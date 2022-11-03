import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";

const MuiAutocomplete = ({ value, name, onChange, onBlur, setField }) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.map((city: any) => city.ciudades).flat());
      });
  }, []);

  return (
    <Autocomplete
      id="city"
      options={data}
      disablePortal
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      onChange={(e, value) => {
        setField(name, value);
      }}
    />
  );
};
export default MuiAutocomplete;
