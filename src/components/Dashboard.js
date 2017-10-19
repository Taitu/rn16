import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '3vh',
    marginRight: '3vh',
  },
  input: {
      margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },

});

const Dashboard = (props) => {
    const { classes } = props;
    return (
      <div>dashboard</div>
    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard)
