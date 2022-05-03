import React, {useState} from "react";
import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export const PasswordTextField = ({value, onChange, label, error, helperText, sx}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      sx={{mt: 3, ...sx}}
      size={'small'}
      fullWidth
      label={label}
      variant="outlined"
      value={value}
      error={error}
      helperText={helperText}
      onChange={event => onChange(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={event => event.preventDefault()}
              edge="end"
            >
              {showPassword ? <Visibility/> : <VisibilityOff/>}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
};
