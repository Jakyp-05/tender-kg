import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextFields from "./TextFields";
import CheckField from "./CheckField";
import { pawdRegExp } from "../utils/Utils";

// create schema validation
const schema = yup.object({
  email: yup.string().required("Email is required").email(),
  passowrd: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  privacy: yup.bool().oneOf([true], "Field must ber checked"),
});

const Login = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleClick = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container maxWidth="xl" sx={{ my: "4rem" }}>
      <div
        style={{
          border: "1px solid #C4C4C4",
          maxWidth: "483px",
          width: "100%",
          margin: "0 auto",
          borderRadius: "3px",
        }}
      >
        <div style={{ padding: "20px", background: "#44ACE9" }}>
          <Typography
            variant="h1"
            fullWidth
            sx={{ fontSize: "20px", textAlign: "center", color: "#fff" }}
          >
            Войти
          </Typography>
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit(handleClick)}
          sx={{ width: "100%", mt: "2re", padding: "20px" }}
        >
          <TextFields
            name="email"
            control={control}
            errors={errors}
            label="Email адрес"
          />
          <TextFields
            name="password"
            control={control}
            errors={errors}
            label="Пароль"
          />
          <Typography sx={{ textAlign: "end", cursor: "pointer" }}>
            <Link>Забыли пароль</Link>
          </Typography>
          <CheckField
            name="privacy"
            control={control}
            errors={errors}
            label="Запомнить"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              my: "1rem",
              background: "#44ACE9",
              height: "37px",
            }}
          >
            Отправить
          </Button>
          <Typography sx={{ textAlign: "end", mb: "0.5rem" }}>
            <Link href="/login">Регистрация</Link>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default Login;
