import MenuIcon from "@mui/icons-material/Menu";
import { Collapse, List, ListItemButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const pages = [
  { to: "/tender", text: "Тендеры" },
  { to: "/contest", text: "Конкурсы" },
  { to: "/auction", text: "Аукционы" },
  { to: "/grant", text: "Гранты" },
];

const pagesAdaptive = [
  { to: "/tender", text: "Тендеры" },
  { to: "/contest", text: "Конкурсы" },
  { to: "/auction", text: "Аукционы" },
  { to: "/grant", text: "Гранты" },
  { to: "/login", text: "Войти" },
  { to: "/registration", text: "Регистрация" },
];

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Тендеры");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(false);
  }, [matches]);

  const hideBgColor = {
    "&:hover": {
      background: "none",
    },
  };

  return (
    <Box className="wrapper" mb={open ? "230px" : ""}>
      <AppBar
        position="fixed"
        className="app-bar"
        sx={{ background: "#44ACE9", height: "64px" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            className="toolbar"
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="cont-row">
              <Box
                className="mobile"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <List
                  sx={{ width: "100%", maxWidth: 360, bgcolor: "#44ACE9" }}
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
                component={NavLink}
                to="/"
                sx={{
                  mr: "85px",
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                }}
              >
                Tenders.kg
              </Typography>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                component={NavLink}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                }}
              >
                Tenders.kg
              </Typography>
              <Box className="nav" sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <NavLink
                    onClick={() => setActiveMenu(page.text)}
                    key={page.to}
                    to={page.to}
                    style={{ color: "#fff", fontSize: "18px" }}
                  >
                    {page.text}
                  </NavLink>
                ))}
              </Box>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                sx={hideBgColor}
                variant="text"
                color="inherit"
                component={NavLink}
                to="/login"
              >
                Войти
              </Button>
              <Button
                sx={hideBgColor}
                variant="outlined"
                component={NavLink}
                color="inherit"
                to="/registration"
              >
                Регистрация
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Collapse
        sx={{
          width: "100%",
          bgcolor: "#44ACE9",
          mt: open ? "38px" : "",
          zIndex: 9999,
        }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List className="nav2" component="div" disablePadding>
          {pagesAdaptive.map((page) => (
            <ListItemButton
              className={activeMenu === page.text ? "active2" : ""}
              onClick={() => {
                setOpen(false);
              }}
              sx={{ pl: 4 }}
              key={page.to}
            >
              <NavLink to={page.to} style={{ color: "#fff", fontSize: "18px" }}>
                {page.text}
              </NavLink>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );
}
export default ResponsiveAppBar;
