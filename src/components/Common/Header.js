import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  flex: {
      flex: 1,
  },
  hide: {
    display: 'none',
  },
  button: {
      marginRight: '12px',
  }
});

const TITLES = {
  '/': 'Главная',
  '/login': 'Вход',
  '/signup': 'Регистрация',
}


const Header = (props) => {
    const { classes, isOpen, handleDrawerOpen, location } = props;
    return (
      <AppBar className={classNames(classes.appBar, isOpen && classes.appBarShift)}>
          <Toolbar disableGutters={!isOpen}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={classNames(classes.menuButton, isOpen && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap className={classes.flex}>
                {TITLES[location.pathname]}
              </Typography>
              <Button href="/login" color="contrast" className={classes.button}>Войти</Button>
          </Toolbar>
      </AppBar>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  handleDrawerOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Header)));
