import React from 'react'
import { Container, Grid, Link, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { YouTube, WhatsApp } from '@mui/icons-material'; 

function Footer() {
  return (
    <footer style={{background: '#D9D9D9', marginTop: '20px'}}>
        <Container maxWidth='xl'>
            <Grid container sx={{display: 'flex',justifyContent: 'space-between'}} spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3} mb={5} mt={5}>
                    <Typography variant='h4' sx={{color: '#44ACE9'}}>Tenders.kg</Typography>
                    <div style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px'}}> 
                        <start style={{display: 'flex', alignItems: 'center', gap: '20px'}}> 
                            <Link href='https://www.youtube.com/@tenderskg1506' target="_blank">
                              <YouTube style={{color: 'red', fontSize: 40}}/>
                              </Link>
                            <Link href='https://web.whatsapp.com/'><WhatsApp style={{color: 'green', fontSize: 40}}/></Link>
                        </start>
                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <MailOutlineIcon />
                            {/* <Typography variant='p'></Typography> */}
                            <a href="#">info@tenders.kg</a>
                        </div> 
                        <Typography variant='p'>© Tenders.kg - Все права защищены</Typography>
                    </div> 
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} mb={5} mt={5}>
                    <Typography variant='h4' sx={{color: '#44ACE9'}}>Полезные ссылки</Typography>
                    <div style={{marginTop: '20px'}}>
                      <Typography variant="subtitle1" gutterBottom>
                        Мы запустили платную SMS рассылку, информация о подключении доступна <a href="#" style={{color: '#44ace9'}}>здесь</a>
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Поставщики товаров и услуг могут  <a href="#" style={{color: '#44ace9'}}>"Подписаться на уведовление"</a> для рассылки новых интересующих поставщиков объновлений
                      </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} mb={5} mt={5}>
                    <Typography variant='h4' sx={{color: '#44ACE9'}}>Узнать больше</Typography>
                    <div style={{marginTop: '20px'}}>
                      <Typography variant="subtitle1" gutterBottom>
                        Служба поддержки
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Политика конфиденциальности 
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        О нас
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Пользовательское соглашение 
                      </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </footer>
  )
}

export default Footer
