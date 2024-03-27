import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "./TextFields";
import CheckFields from "./CheckFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pawdRegExp, phoneRegExp } from "../utils/Utils";

// create schema validation

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email(),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  privacy: yup.bool().oneOf([true], "Field must ber checked"),
});

const Registration = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      privacy: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container maxWidth="xl">
      <div
        style={{
          border: "1px solid #C4C4C4",
          maxWidth: "483px",
          width: "100%",
          margin: "0 auto",
          borderRadius: "3px",
          marginTop: "64px",
        }}
      >
        <div style={{ padding: "20px", background: "#44ACE9" }}>
          <Typography
            variant="h1"
            fullWidth
            sx={{ fontSize: "20px", textAlign: "center", color: "#fff" }}
          >
            Регистрация
          </Typography>
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%", padding: "18px" }}
        >
          <TextFields
            name="name"
            control={control}
            errors={errors}
            label="Имя"
          />
          <TextFields
            name="email"
            control={control}
            errors={errors}
            label="Email адрес"
          />
          <TextFields
            control={control}
            errors={errors}
            name="phone"
            label="Ваш номер"
            type="number"
          />
          <TextFields
            control={control}
            errors={errors}
            name="password"
            label="Пароль"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CheckFields
              control={control}
              errors={errors}
              name="privacy"
              label="Согласен с"
              link="Политика конфиденциальности"
              href="/privacy"
            />
            <CheckFields
              control={control}
              errors={errors}
              name="privacy"
              label="Принять условия"
              link="Пользовательское соглашение"
              href="terms"
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ background: "#44ACE9", mt: '1rem' }}
          >
            Отправить
          </Button>
          <Typography sx={{ textAlign: "end", mt: '1rem' }}>
            <Link href="/login">Вернуться на страницу логина</Link>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default Registration;
