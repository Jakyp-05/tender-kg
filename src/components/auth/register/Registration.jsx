import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Registration() {
  const paperStyle = {
    width: 483,
    margin: "20px auto",
    padding: "0 0 20px 0",
    borderRadius: 3,
  };
  return (
    <div className="auth-register">
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Typography
            sx={{ background: "#44ACE9", color: "white", padding: '13px', borderRadius: '3px 3px 0 0' }}
            variant="h5"
            textAlign="center"
          >
            Регистрация
          </Typography>
          <div className="auth-container">
            <TextField
              label="Имя"
              placeholder="Введите ваше имя"
              fullWidth
              required
            />
            <TextField
              label="Email адрес"
              placeholder="Введите ваш email"
              fullWidth
              required
            />
            <TextField
              label="996"
              placeholder="Введите ваш номер"
              fullWidth
              required
            />
            <TextField
              label="Пароль"
              placeholder="Введите ваш пароль"
              fullWidth
              required
            />
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel control={<Checkbox />} label="Согласен с" />
                <Link href="/privacy">Политика конфиденциальности</Link>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Принять условия"
                />
                <Link href="/terms">Пользовательское соглашение</Link>
              </div>
            </div>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Отправить
            </Button>
            <Typography sx={{textAlign: 'end'}}>
              <Link href="/login">Вернуться на страницу логина</Link>
            </Typography>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default Registration;
