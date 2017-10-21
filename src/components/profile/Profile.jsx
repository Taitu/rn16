import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import EditPic from 'material-ui-icons/AddAPhoto';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  media: {
    height: 200,
    display: 'flex'
  },
  mediaNew: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa'
  },
  editImg: {
    marginTop: 'auto',
    position: 'relative',
    top: '25px',
    left: '25px',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  input: {
    margin: 0,
  },
  newImg: {
    alignSelf: 'auto',
    width: '50%',
    height: '50%',
    fill: '#ccc'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
      paddingLeft: theme.spacing.unit * 4,
  },
  listItem: {
    paddingLeft: '5px !important'
  },
  listItemNested: {
    paddingLeft: '15px !important'
  }
});

class Profile extends React.Component {

  state = {
    open: false,
    openNested: false
  };

  handleClick = () => {
      this.setState({ open: !this.state.open });
  };

  handleClickNested = () => {
    this.setState({ openNested: !this.state.openNested });
  };

  render() {
    const {classes} = this.props;
      return (
          <Card className={classes.card}>
              {/*<CardMedia
               className={classes.media}
               image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
               title="Contemplative Reptile">
               <Button fab color="accent" aria-label="add-a-photo" className={classes.editImg}>
               <EditPic />
               </Button>
               </CardMedia>*/}
            <CardMedia className={classes.mediaNew} image='/'>
              <EditPic className={classes.newImg}/>
            </CardMedia>
            <CardContent>
              <List className={classes.root}>
                <ListItem button onClick={this.handleClick}>
                  <ListItemText inset primary="Inbox" className={classes.listItem} />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                  <ListItem button>
                    <ListItemText inset primary="Sent mail" className={classes.listItem}/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText inset primary="Drafts" className={classes.listItem} />
                  </ListItem>
                  <ListItem button onClick={this.handleClickNested}>
                    <ListItemText inset primary="Inbox" className={classes.listItem} />
                    {this.state.openNested ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.openNested} transitionDuration="auto" unmountOnExit>
                    <ListItem button>
                      <ListItemText inset primary="Sent mail" className={classes.listItemNested}/>
                    </ListItem>
                    <ListItem button>
                      <ListItemText inset primary="Starred" className={classes.listItemNested}/>
                    </ListItem>
                  </Collapse>
                </Collapse>
              </List>
              <TextField
                  margin="normal"
                  label="Название компании"
                  className={classes.input}
                  name='name'
                  fullWidth
              />
              <TextField
                  margin="normal"
                  label="Адресс"
                  className={classes.input}
                  name="address"
                  fullWidth
              />
              <TextField
                  margin="normal"
                  label="телефон"
                  className={classes.input}
                  name='phone'
                  fullWidth
              />
              <TextField
                  margin="normal"
                  label="email"
                  className={classes.input}
                  name="email"
                  fullWidth
              />
            </CardContent>
            <CardActions>
              <Button raised color="primary" className={classes.button}>Сохранить</Button>
            </CardActions>
          </Card>
      )
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);