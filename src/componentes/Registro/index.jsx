import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import style from './registro.css'
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2,
    width: 300,
  }, 
  card: {
    maxWidth: 700,
    textAlign: 'center',
  },
   title: {
    marginBottom: 16,
    fontSize: 16,
    color: theme.palette.text.secondary,
  },
  button1: {
    textAlign: 'left' 
  }
});


class Registro extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className = {style.container}>
       <Card className={classes.card}>
        <CardContent>
        <Typography component="h2" className={classes.title}>Datos basicos</Typography>
        <Divider />
          <br />
         <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="name"
            label="Nombre de la Asociación"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="representante"
            label="Representante Legal"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="objetivo"
            label="Objetivo Social"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="ubicacion"
            label="Ubicacion"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="contacto"
            label="Numero de Contacto"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="email"
            label="Email"
            className={classes.textField}
            margin="normal"
          />
        </form>
        <div>
           <br/><br/>
           <Button variant="raised" className={style.buttonborrar}>
            Borrar todo
           </Button>
           <Button variant="raised" color="primary" className={style.buttonenviar}>
            Primary
          </Button>
        </div>
        </CardContent>
      </Card>
     </div>
    )
  }
}

Registro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registro);