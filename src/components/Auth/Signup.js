import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import {signUp as signUpAction} from '../../actions/auth/creators/signIn';

const categories = [
  { text: 'Торговая точка', value: 'store' },
  { text: 'Компания', value: 'storehouse'},
];
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
  formControl: {
    display: 'flex',
  },
  flexGrow: {
    flexGrow: 1,
  }
});

class Signup extends React.Component {
  state = {
    phone: '',
    password: '',
    role: '',
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSubmit = () => {
    const { dispatch, signUpAction } = this.props;
    const { phone, password, role } = this.state;
    dispatch(signUpAction({phone, password, role }))
  }

  render() {
    const { classes } = this.props;
    const { phone, password, role } = this.state;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            align='center'
            direction='row'
            justify='center'
          >
            <Card className={classes.container}>
              <CardContent>
                <Grid container>
                  <Grid item>
                    <TextField
                      margin="normal"
                      label="996555123456"
                      className={classes.input}
                      name='phone'
                      value={ phone }
                      onChange={this.handleChange('phone')}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <TextField
                      type="password"
                      label="Password"
                      margin="normal"
                      className={classes.input}
                      name='password'
                      value={ password }
                      onChange={this.handleChange('password')}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className={classes.flexGrow}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-simple">Роль</InputLabel>
                      <Select
                        value={this.state.role}
                        onChange={this.handleChange('role')}
                        input={<Input id="age-simple" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {categories.map(x => <MenuItem key={x.value} value={x.value}>{x.text}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Button raised color="primary" className={classes.button} onClick={this.onSubmit}>Зарегистрироваться</Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Button href='/login' color="primary" className={classes.button}>Войти</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signUpAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    signUpAction,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Signup))
