import React, { Component } from 'react';

import './Header.css';

//material ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



class Header extends Component {

  render() {
    return (
        // <header className="App-header">
        //   <h1 className="App-title">GitHero</h1>
        // </header>
        <div >
          <AppBar position="static">
            <Toolbar className="header">
              <div className="title">
                <Typography variant="title" color="inherit" >
                GitHero
                </Typography>
              </div>
              <div className="title-action">
              <Button color="inherit">Login</Button>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>

    );
  }
}

export default Header;