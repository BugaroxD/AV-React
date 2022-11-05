import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Avatar,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import { useState } from "react";
import * as React from "react";

export const JLMCPageLayout = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper style={{ backgroundColor: "black" }}>
      <Box
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
        display="flex"
        overflow-y={"hidden"}
      >
        <Avatar
          src="https://portalpopline.com.br/wp-content/uploads/2021/12/pacificador-dc-primeiras-impressoes.jpg"
          sx={{ width: 300, height: 300, margin: "0 auto" }}
        />

        <div style={{ maxHeight: "100vh", overflow: "auto" }}>
          <Outlet />
        </div>
        <BottomNavigation
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            height: "auto",
            padding: "1rem",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={""}
            LinkComponent={Link}
            to="/home"
          />
          <BottomNavigationAction
            label="Sobre"
            icon={""}
            LinkComponent={Link}
            to="/sobre"
          />
          <BottomNavigationAction
            label="Notícias"
            icon={""}
            LinkComponent={Link}
            to="/noticia"
          />
          <BottomNavigationAction
            label="Playlist"
            icon={""}
            LinkComponent={Link}
            to="/playlist"
          />
          <BottomNavigationAction
            label="Contato"
            icon={""}
            LinkComponent={Link}
            to="/contato"
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default JLMCPageLayout;
