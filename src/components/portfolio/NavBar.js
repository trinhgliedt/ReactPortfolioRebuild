import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Home } from "@material-ui/icons";

import NavLinks from "./NavLinks";
import NavbarSideDrawer from "./NarBarSideDrawer";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <IconButton edge="start" color="inherit" aria-label="home">
              <Home fontSize="large" />
            </IconButton>
            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {NavLinks.map(({ title, path }) => (
                  <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <NavbarSideDrawer navLinks={NavLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
