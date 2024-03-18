import { Container, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Container maxWidth='lg'>
      <div className="about-content">
        <Typography variant="h5" textAlign='center' gutterBottom>
          О нас
        </Typography>
        <div className="about-container">
          <div className="about-title">
            <Typography variant="h6" textAlign='center' gutterBottom>
              ОсОО "ИВТ Лаб".
            </Typography>
            <div className="about-text">
              <Typography variant="p" gutterBottom>
                Адрес: 720009; Кыргызская Республика, Бишкек, Ленинский район,
                пер. Сосновый, дом 16.
              </Typography>
              <Typography variant="p" gutterBottom>
                ИНН: 00708201710169, ОКПО: 30001706
              </Typography>
              <Typography variant="p" gutterBottom>
                Код: НСКР: 004
              </Typography>
              <Typography variant="p" gutterBottom>
                Email: info@tenders.com
              </Typography>
            </div>
          </div>
          <div className="about-title">
            <Typography  variant="h6" textAlign='center' gutterBottom>
              Банковские реквизиты:
            </Typography>
            <div className="about-text">
              <Typography variant="p" gutterBottom>
                Банк: Филиал "ДКИБ-Главный" DemirBank 245 просп. Чуй, Бишкек,
                Киргизия
              </Typography>
              <Typography variant="p" gutterBottom>
                ИНН: 41112200810109, БИК: 118005.
              </Typography>
              <Typography variant="p" gutterBottom>
                Получатель: р/счет: 1180000098504922, ОсОО "ИВТ Лаб".
              </Typography>
            </div>
          </div>
          <div className="about-title">
            <Typography variant="h6" gutterBottom>
              Техническая поддержка:
            </Typography>
            <div className="about-text">
              <Typography variant="p" gutterBottom>
                Email: info@tenders.kg
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
