import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },
  list: {
    width: 250,
  },
  item: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            onClick={() => setVisible(open => !open)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">NeuralPy</Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={visible}
        onClick={() => setVisible(open => !open)}
      >
        <List className={classes.list}>
          <ListItem>
            <Link className={classes.item} to="/">
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link className={classes.item} to="/docs">
              <ListItemText>Docs</ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link
              className={classes.item}
              to="https://github.com/imdeepmind/NeuralPy-Examples"
            >
              <ListItemText>Examples</ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link className={classes.item} to="https://medium.com/@imdeepmind">
              <ListItemText>Blogs</ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link className={classes.item} to="/support">
              <ListItemText>Support</ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link
              className={classes.item}
              to="https://github.com/imdeepmind/NeuralPy"
            >
              <ListItemText>Github</ListItemText>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </div>
  )
}

export default Navbar
