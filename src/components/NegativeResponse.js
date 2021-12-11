import React from 'react';
import {Alert} from "@mui/material";

class NegativeResponse extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Alert variant="filled" severity="success">
                    Una frase para intentar animarte: {this.props.data.frase}
                </Alert>
            </div>
        );
    }
}
export default NegativeResponse;