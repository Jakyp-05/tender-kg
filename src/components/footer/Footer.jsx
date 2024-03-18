import React, { useState } from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { YouTube, WhatsApp } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLinkClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsAnimating(false);
    });
  };

  return (
    <footer style={{ background: "#D9D9D9", marginTop: "20px" }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            mb={5}
            mt={5}
            className="footer-size"
          >
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#44ACE9", fontSize: "2.5rem" }}
              >
                Tenders.kg
              </Typography>
            </RouterLink>
            <div
              style={{
                marginTop: "80px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Link
                  href="https://www.youtube.com/@tenderskg1506"
                  target="_blank"
                >
                  <YouTube style={{ color: "red", fontSize: 40 }} />
                </Link>
                <Link href="https://web.whatsapp.com/">
                  <WhatsApp style={{ color: "green", fontSize: 40 }} />
                </Link>
              </div>
              <div
                mb={4}
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <MailOutlineIcon />
                <a
                  href="https://top.mail.ru/visits?id=3268894&from=jumpfrom"
                  target="_blank"
                >
                  info@tenders.kg
                </a>
              </div>
              <Typography variant="p">
                © Tenders.kg - Все права защищены
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            mb={5}
            mt={7}
            className="footer-size"
          >
            <Typography
              variant="h4"
              sx={{ color: "#44ACE9", fontSize: "1.5rem" }}
            >
              Полезные ссылки
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <Typography variant="subtitle1" mb={5} gutterBottom>
                Мы запустили платную SMS рассылку, информация о подключении
                доступна{" "}
                <a
                  href="https://www.youtube.com/watch?v=5ubUM_K27MI"
                  target="_blank"
                  style={{ color: "#44ace9" }}
                >
                  здесь
                </a>
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Поставщики товаров и услуг могут{" "}
                <a href="#" style={{ color: "#44ace9" }}>
                  "Подписаться на уведовление"
                </a>{" "}
                для рассылки новых интересующих поставщиков объновлений
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            mb={5}
            mt={7}
            className="footer-size"
          >
            <Typography
              variant="h4"
              sx={{ color: "#44ACE9", fontSize: "1.5rem" }}
            >
              Узнать больше
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <RouterLink
                to="/support"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  onClick={handleLinkClick}
                  mb={4}
                  variant="subtitle1"
                  gutterBottom
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    color: isAnimating ? "black" : "black",
                  }}
                >
                  Служба поддержки
                </Typography>
              </RouterLink>
              <RouterLink
                to="/privacy"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  mb={4}
                  variant="subtitle1"
                  gutterBottom
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    color: isAnimating ? "black" : "black",
                  }}
                  onClick={handleLinkClick}
                >
                  Политика конфиденциальности
                </Typography>
              </RouterLink>
              <RouterLink
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  mb={3}
                  variant="subtitle1"
                  gutterBottom
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    color: isAnimating ? "black" : "black",
                  }}
                  onClick={handleLinkClick}
                >
                  О нас
                </Typography>
              </RouterLink>
              <RouterLink
                to="/terms"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    color: isAnimating ? "black" : "black",
                  }}
                  onClick={handleLinkClick}
                >
                  Пользовательское соглашение
                </Typography>
              </RouterLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
