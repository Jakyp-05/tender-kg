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

function Login() {
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
            sx={{
              background: "#44ACE9",
              color: "white",
              padding: "13px",
              borderRadius: "3px 3px 0 0",
            }}
            variant="h5"
            textAlign="center"
          >
            Войти
          </Typography>
          <div className="auth-container">
            <TextField
              label="Имя"
              type="text"
              placeholder="Введите ваше имя"
              fullWidth
              required
            />
            <TextField
              label="Email адрес"
              type="email"
              placeholder="Введите ваш email"
              fullWidth
              required
            />
            <div>
              <div style={{textAlign: 'end'}}>
                <Typography>Забыли пароль?</Typography>
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Запомнить"
                />
              </div>
            </div>
            <Button type="submit" color="primary" variant="contained" fullWidth sx={{background:'#44ACE9', '&:hover' : {background:'#44ACE9'}}}>
              Отправить
            </Button>
            <Typography className="auth-right-login" sx={{textAlign: 'end'}}>
              <Link href="/registration">Регистрация</Link>
            </Typography>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
