import React from 'react';
import {Alert} from "@mui/material";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";
import {enviarFrase} from "../services/apiService";

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

class PositiveResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frase: ""
        }
        this.updateFrase = this.updateFrase.bind(this);
        this.updateElement = this.updateElement.bind(this);
    }
    updateFrase(evt) {
        this.setState({
            frase: evt.target.value
        });
    }
    updateElement() {
        const frase = this.state.frase;
        const id = this.props.data.docId;
        let response = enviarFrase(id,frase);
        response.then(x => {
            console.log(x);
            alert("Se ha guardado la información! Gracias :D");
        })
    }
    render() {
        const {classes} = this.props;
        return(<div>
            <Alert severity="success">Wow! Parece que te encuentras bien hoy, que tal si te dices algo motivador a ti mismo?
                Por si en el futuro las cosas no van tan  bien</Alert>
            <TextField
                variant="outlined"
                margin="normal"

                fullWidth
                id="mood2"
                label="Date una frase que te motive en el futuro"
                name="mood2"
                onChange={this.updateFrase}
                autoFocus
            />
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.updateElement}
            >
                Motívate en el futuro
            </Button>

        </div>);
    }
}
export default withStyles(useStyles) (PositiveResponse);