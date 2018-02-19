import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import style from './login.css'

/////////// Componentes Material UI - Estilos /////////////
import Divider from 'material-ui/Divider';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
/////////// Componentes Material UI - Estilos /////////////

const styles = theme => ({

  root:{
    marginTop: theme.spacing.unit * 3,    
  },
  space:{
  	marginTop: theme.spacing.unit * 3,
  },
  card: {
  	maxWidth: 400,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5,
  },
  title: {
  	textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
    color: theme.palette.text.secondary,
  },
  title2: {
  	textAlign: 'center',
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
  type: {
  	fontSize: 10,
    color: theme.palette.text.secondary,
  }
});

class LogIn extends Component{
 
 constructor(){
 	super()
 	this.state = {
 		user: '',
	    password: '',
	    showPassword: false,
  };
 }

 handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render(){
  	const { classes } = this.props;
	return (
	  <div className = {style.container}>
	    <Card className={classes.card}>
	      <CardContent>
	        <Typography component="h2" className={classes.title}>Farmer ORG</Typography>
	        <Divider />
	        <br />
	        <Typography component="h2" className={classes.title}>Iniciar sesión</Typography>
	        <Typography component="h2" className={classes.title2}>Inicia con la asociacion y conoce el progreso de tus productores</Typography>
	        <FormControl fullWidth>
	          <InputLabel htmlFor="user">Usuario</InputLabel>
	          <Input
	            id="adornment-user"
	            value={this.state.user}
	            onChange={this.handleChange('user')}
	            endAdornment={ <InputAdornment position="end"> </InputAdornment> }
	          />
	        </FormControl>
	        <FormControl fullWidth className={classes.space}>
	          <InputLabel htmlFor="password">Contraseña</InputLabel>
	          <Input
	            id="adornment-password"
	            type={this.state.showPassword ? 'text' : 'password'}
	            value={this.state.password}
	            onChange={this.handleChange('password')}
	            endAdornment={
	              <InputAdornment position="end">
	                <IconButton
	                  onClick={this.handleClickShowPasssword}
	                  onMouseDown={this.handleMouseDownPassword}
	                >
	                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
	                </IconButton>
	              </InputAdornment>
	            }
	          />
	        </FormControl>
	        <br />
	        <Button fullWidth variant="raised" color="primary" className={classes.space}>
	        	Entrar
	      	</Button>
	      	<br /><br />
	      	<Typography  color="primary" className={classes.type}>¿Olvido su contraseña?</Typography>
	        <Typography className={classes.type}>Ayuda</Typography>
	      </CardContent>
	    </Card>
	  </div>
	  );

  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);