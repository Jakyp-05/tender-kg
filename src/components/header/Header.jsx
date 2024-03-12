// import React, { useState } from 'react'

// import { Link, NavLink } from 'react-router-dom'

// function Header() {
//     const [activeMenu, setActiveMenu] = useState(false)

//     const handleMenuClick = (index) => {
//         setActiveMenu(index)
//         setActiveMenu(!activeMenu)
//     }

//   return (
//     <header className='header'>
//       <div className='container'>
//         <div className='logo'>
//             <Link to='/'>Tenders.kg</Link>
//         </div>
//         <div className='header-menu'>
//             <nav>
//                 <ul>
//                     <li>
//                         <NavLink onClick={() => handleMenuClick(0)} className={activeMenu === 0 ? "active" : ""} to='/'>Главная</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={() => handleMenuClick(1)} className={activeMenu === 1 ? "active" : ""} to='/contest'>Конкурсы</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={() => handleMenuClick(2)} className={activeMenu === 2 ? "active" : ""} to='/auction'>Аукционы</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={() => handleMenuClick(3)} className={activeMenu === 3 ? "active" : ""} to='/tender'>Тендеры</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={() => handleMenuClick(4)} className={activeMenu === 4 ? "active" : ""} to='/grant'>Гранты</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={() => handleMenuClick(5)} className={activeMenu === 5 ? "active" : ""} to='/other'>Ище 
//                             <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M12 1H2L7 7.5L12 1Z" fill="white" stroke="white"/>
//                             </svg>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//             <div className='header-btns'>
//                 <button>
//                     <NavLink to='/authentication'>Войти</NavLink>
//                 </button>
//                 <button>
//                     <NavLink to='/registration'>Регистрация</NavLink>
//                 </button>
//             </div>
//         </div>
//         <label htmlFor="burger" className='burger'>
//             <input type="checkbox" id="burger" />
//             <span></span>
//             <span></span>
//             <span></span>
//         </label>
//       </div>
//     </header>
//   )
// }

// export default Header


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';



const pages = [
  {to: '/', text: 'Главная'},
  {to: '/contest', text: 'Конкурсы'},
  {to: '/auction', text: 'Аукционы'},
  {to: '/tender', text: 'Тендеры'},
  {to: '/grant', text: 'Гранты'}
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='wrapper'>
      <AppBar position="static" className='app-bar'>
      <Container maxWidth="xl" >
        <Toolbar className='toolbar' disableGutters sx={{border: '1px solid black', display: 'flex',}}>
          <div className='cont-row'>
          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',},
                padding: '20px'
              }}
            >
              {pages.map((page) => (
                <Link key={page.to} href={page.to} onClick={handleCloseNavMenu} sx={{textDecoration: 'none'}}>
                  <Typography textAlign="center">{page.text}</Typography>
                </Link>
              ))}
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
              textDecoration: 'none',
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
              textDecoration: 'none',
            }}
            >
            Tenders.kg
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '50px' } }}>
              {pages.map((page) => (
                <Link key={page.to} underline="none" href={page.to} sx={{ my: 2, color: 'white', display: 'block', fontSize: '50px' }}>
                  <Typography textAlign="center">{page.text}</Typography>
                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;