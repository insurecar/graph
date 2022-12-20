import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@mui/material";

import { Link } from "react-router-dom";

import { Settings, Menu as MenuIcon } from "@mui/icons-material";

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="/settings">
          <ListItem disablePadding>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Movies recomendation</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Link to="/settings">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Settings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
