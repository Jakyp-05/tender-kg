import { FormControl, TextField } from "@mui/material";
import React from "react";
import { AddErrorIntoField } from "../utils/Utils";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const TextFields = ({ label, InputProps, control, name, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...AddErrorIntoField(errors[name])}
            required
            label={label}
            />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default TextFields;
