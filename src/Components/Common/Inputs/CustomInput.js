import React from "react";
import {TextField} from "@mui/material";

export const CustomInput = ({value, onChange, label, error, helperText, multiline, rows}) => {
  return (
    <TextField
      rows={rows}
      multiline={multiline}
      value={value}
      onChange={event => onChange(event.target.value)}
      sx={{mt: 3}}
      size={'small'}
      fullWidth
      label={label}
      variant="outlined"
      error={error}
      helperText={helperText}
    />
  )
};
