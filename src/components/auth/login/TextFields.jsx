import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextFields = ({ label, name, control, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <TextField {...field} label={label} />}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default TextFields;
