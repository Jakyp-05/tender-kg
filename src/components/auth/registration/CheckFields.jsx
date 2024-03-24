import { Checkbox, FormControlLabel, Link } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";


const CheckFields = ({ label, name, control, errors, link, href }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="regis-link">
            <FormControlLabel
              control={<Checkbox {...field} />}
              label={label}
              value="false"
            />
            <Link className="link" href={href}>{link}</Link>
          </div>
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  );
};

export default CheckFields;
