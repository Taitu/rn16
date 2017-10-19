import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
// import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import {Link} from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});



const Navigation = (props) => {
  const { classes,isOpen, handleDrawerClose } = props;
    return (
      <Drawer
        type="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isOpen}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <ListItem button to='/my-account' component={Link} onClick={handleDrawerClose}>
              <ListItemText primary="Личный кабинет" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
          {/*<Divider />*/}
          {/*<List className={classes.list}>{mailFolderListItems}</List>*/}
          {/*<Divider />*/}
          {/*<List className={classes.list}>{otherMailFolderListItems}</List>*/}
        </div>
      </Drawer>
    );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navigation);
