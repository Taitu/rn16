import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import EditPic from 'material-ui-icons/AddAPhoto';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

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
    margin: theme.spacing.unit,
  },
  newImg: {
    alignSelf: 'auto',
    width: '50%',
    height: '50%',
    fill: '#ccc'
  },
  listSection: {
    background: 'inherit',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
});

const cityArray = [
  {
    'name': 'Бишкек',
    id: 'bishkek',
    'subs': [
      {'id': 0, name: 'llll', selectable: true},
      {'id': 1, name: '5656', selectable: true},
      {'id': 2, name: '45454l', selectable: true},
    ]
  },
  {
    'name': 'Бишкек111',
    id: 'bishkek111',
    'subs': [
      {'id': 3, name: '89898l', subs: [
        {
          'name': 'Бишкек111',
          id: 'bishkek111',
          'subs': [
            {'id': 4, name: 'zzzzzz', selectable: true},
            {'id': 5, name: 'uuy', selectable: true},
            {'id': 6, name: '456784l', selectable: true},
          ]
        }
      ]},
    ]
  }
]

function Profile(props) {
  const { classes } = props;

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
        <List className={classes.root} subheader>
          {[0, 1, 2, 3, 4].map(sectionId => (
            <div key={`section-${sectionId}`} className={classes.listSection}>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem button key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                  <ListItemSecondaryAction>
                    <Checkbox />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </div>
          ))}
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
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);