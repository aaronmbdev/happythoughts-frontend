import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from "@material-ui/core";
import {analyzeText} from "../services/apiService";
import PositiveResponse from "./PositiveResponse";
import NegativeResponse from "./NegativeResponse";
import NeutralResponse from "./NeutralResponse";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.fib.upc.edu/ca/la-marato#/">
        Hackaton per la Marató
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function RenderComponent(data)  {
  if(data.data != null) {
    if(data.data.result === "positive") {
      return(<PositiveResponse data={data.data} />);
    } else if (data.data.result === "negative") {
      return (<NegativeResponse data={data.data} />);
    } else {
      return (<NeutralResponse />);
    }
  } else {
    return(<p>.</p>);
  }
}

const useStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "",
      lastRequest: null
    }
    this.updateStatusValue = this.updateStatusValue.bind(this);
    this.procesaEstado = this.procesaEstado.bind(this);
  }

  updateStatusValue(evt) {
    this.setState({
      estado: evt.target.value
    });
  }

  procesaEstado() {
    let status = this.state.estado;
    let response = analyzeText(status);
    response.then(data => {
      this.setState({
        lastRequest: data
      })
    })
  }

  render() {
    const {classes} = this.props;
   return(<Container className="main" component="main" maxWidth="md">
     <CssBaseline />
     <div className={classes.paper}>
       <Avatar className={classes.avatar}>
       </Avatar>
       <Typography component="h1" variant="h5">
         Bienvenido a tu espacio personal, Marc
       </Typography>
         <TextField
             variant="outlined"
             margin="normal"

             fullWidth
             id="mood"
             label="¿Que estás pensando?"
             name="mood"
             autoComplete="¿Que estás pensando?"
             onChange={this.updateStatusValue}
             autoFocus
         />
         <Button
             type="button"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             onClick={this.procesaEstado}
         >
           Analizar

         </Button>
     </div>
     <Box mt={8}>
       <RenderComponent data={this.state.lastRequest}/>
     </Box>
     <Box mt={8}>
       <Copyright />
     </Box>
   </Container>);
  }

}
export default withStyles(useStyles) (SignIn);
