import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const pages = [
  { to: '/', text: 'Главная' },
  { to: '/contest', text: 'Конкурсы' },
  { to: '/auction', text: 'Аукционы' },
  { to: '/tender', text: 'Тендеры' },
  { to: '/grant', text: 'Гранты' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Times New Roman', 
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
      <AppBar position="static" className='app-bar'>
        <Container maxWidth="xl">
          <Toolbar className='toolbar' disableGutters sx={{display: 'flex', justifyContent: 'space-between' }}>
            <div className='cont-row'>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    padding: '20px'
                  }}
                >
                  {pages.map((page) => (
                    <Link key={page.to} to={page.to} onClick={handleCloseNavMenu} sx={{ textDecoration: 'none', fontFamily: 'Times New Roman' }}>
                      {page.text}
                    </Link>
                  ))}
                  <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                    <Button variant="text" href="#contained-buttons">
                      Link1
                    </Button>
                    <Button variant="text" href="#contained-buttons">
                      Link2
                    </Button>
                  </Stack>
                </Menu>
              </Box>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Tenders.kg
              </Typography>
            </div>
            <div className='cont'>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Tenders.kg
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '50px' } }}>
                {pages.map((page) => (
                  <Link key={page.to} underline="none" to={page.to} style={{ color: '#fff', fontSize: '18px' }}>
                    {page.text}
                  </Link>
                ))}
              </Box>
            </div>
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="contained" href='/enter'>Войти</Button>
              <Button variant="contained" href="/register">
                Регистрация
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
