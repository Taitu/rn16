import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import {getSignIn as getSignInAction} from '../../actions/auth/creators/signIn';
import { push } from 'connected-react-router';


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

class Login extends React.Component {
  state = {
    phone: '',
    password: '',
  }

  onChangeInput = (e) => {
     this.setState({
       [e.target.name]: e.target.value
     });
   }

   onSubmit = () => {
     const { dispatch, getSignInAction } = this.props;
     const { phone, password } = this.state;
     dispatch(getSignInAction({ phone, password }))
       .then(() => dispatch(push('/')))
   }

  render() {
    const { classes } = this.props;
    const { phone, password } = this.state;

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
                      label="Тел.: 996555123456"
                      className={classes.input}
                      value={phone}
                      name='phone'
                      onChange={this.onChangeInput}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <TextField
                      type="password"
                      label="Пароль"
                      className={classes.input}
                      value={password}
                      name='password'
                      onChange={this.onChangeInput}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Button
                      raised
                      color="primary"
                      className={classes.button}
                      onClick={this.onSubmit}
                    >
                      Войти
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Button href='/signup' color="primary" className={classes.button}>
                      Зарегистрироваться
                    </Button>
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

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  getSignInAction: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  console.log(state)
  return {
    getSignInAction,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Login))
