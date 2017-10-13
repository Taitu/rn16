import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import MaskedInput from 'react-text-mask';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

const Phone = (props) => {
    return <MaskedInput
        {...props}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
    />
}

function Inputs(props) {
    const { classes } = props;
    return (
        <Card className={classes.container}>
            <CardContent>
                <TextField
                    margin="normal"
                    label="996555123456"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                <TextField
                    type="password"
                    label="Password"
                    margin="normal"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                <Button dense>LogIn</Button>
            </CardContent>
        </Card>
    );
}

Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs)