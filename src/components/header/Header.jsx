import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const pages = [
  { to: '/contest', text: 'Конкурсы' },
  { to: '/auction', text: 'Аукционы' },
  { to: '/tender', text: 'Тендеры' },
  { to: '/grant', text: 'Гранты' }
];

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(false);
  }, [matches])


  const hideBgColor = {
    '&:hover': {
      background: 'none'
    }
  }

  return (
    <div className='wrapper'>
      <AppBar position="static" className='app-bar' sx={{ background: "#44ACE9", }}>
        <Container maxWidth="xl">
          <Toolbar className='toolbar' disableGutters sx={{ display: 'flex', justifyContent: "space-between" }}>
            <div className='cont-row'>
              <Box className="mobile" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <List
                  sx={{ width: '100%', maxWidth: 360, bgcolor: '#44ACE9' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </List>
              </Box>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  mr: "85px",
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                }}
              >
                Tenders.kg
              </Typography>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                }}
              >
                Tenders.kg
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex', gap: '30px' } }}>
                {pages.map((page) => (
                  <Link key={page.to} to={page.to} style={{ color: '#fff', fontSize: '18px' }}>
                    {page.text}
                  </Link>
                ))}
              </Box>
            </Box>
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button sx={hideBgColor} variant="text" color='inherit' component={Link} to='/enter'>Войти</Button>
              <Button sx={hideBgColor} variant="outlined" component={Link} color='inherit' to="/register">
                Регистрация
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Collapse sx={{ width: "100%", bgcolor: '#44ACE9' }} in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {pages.map((page) => (
            <ListItemButton sx={{ pl: 4 }} key={page.to} >
              <Link to={page.to} style={{ color: '#fff', fontSize: '18px' }}>
                {page.text}
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
export default ResponsiveAppBar;
