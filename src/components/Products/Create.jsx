import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  input: {
    margin: `${theme.spacing.unit * 1.5}px 0`,
  },
  formControl: {
    margin: 0,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Create extends React.Component {
  state = {
    category: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <TextField
            margin="normal"
            label="Название товара"
            className={classes.input}
            name='name'
            fullWidth
          />
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="category">Категория</InputLabel>
            <Select
              value={this.state.category}
              onChange={this.handleChange('category')}
              input={<Input id="category" />}
            >
              <MenuItem value="">
                <em>Без категории</em>
              </MenuItem>
              <MenuItem value='0'>Бакалея</MenuItem>
              <MenuItem value='1'>Мыломойка</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            label="Артикуль (штрих-код)"
            type="number"
            className={classes.input}
            name="article"
            fullWidth
          />
          <TextField
            margin="normal"
            label="Количество"
            type="number"
            className={classes.input}
            name='quantity'
            fullWidth
          />
          <TextField
            margin="normal"
            placeholder="Дата производства"
            className={classes.input}
            name="create-on"
            type="date"
            fullWidth
          />
          <TextField
            margin="normal"
            label="Срок хранения"
            className={classes.input}
            name="expires-on"
            type="date"
            fullWidth
          />
          <TextField
            margin="normal"
            label="Вес"
            className={classes.input}
            name="weight"
            fullWidth
          />
          <TextField
            margin="normal"
            label="Объем"
            className={classes.input}
            name="volume"
            fullWidth
          />
          <TextField
            margin="normal"
            label="Цена"
            className={classes.input}
            name="price"
            fullWidth
            type="number"
          />
        </CardContent>
        <CardActions>
          <Button raised color="primary" className={classes.button}>Сохранить</Button>
        </CardActions>
      </Card>
    )
  }
}

Create.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Create);