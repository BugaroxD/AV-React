import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

export const JLMCPageLayout = () => {
  const drawerWidth = 240;

  const DrawerApp = () => {
    return (
      <Box>
        <Avatar
          src="https://portalpopline.com.br/wp-content/uploads/2021/12/pacificador-dc-primeiras-impressoes.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h5" sx={{ textAlign: "center", fontSize: "2rem" }}>
          Peacemaker
        </Typography>
        <List>
          <ListItem>
            <ListItemButton component="a" href="/home">
              <ListItemText primary={"Home"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/sobre">
              <ListItemText primary={"Sobre"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/playlist">
              <ListItemText primary={"Playlist"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/noticia">
              <ListItemText primary={"Noticia"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/contato">
              <ListItemText primary={"Contato"}></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

  const Container = () => {
    const [abrirNav, setAbrirNav] = React.useState(false);

    const abrirModal = () => {
      setAbrirNav(!abrirNav);
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={abrirModal}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            open={abrirNav}
            variant="temporary"
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Container />

      <Outlet />
    </>
  );
};
