import React from 'react';
import {Alert} from "@mui/material";

class NeutralResponse extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Alert severity="warning">No hemos podido determinar el sentimiento en el texto. Vuelve a intentarlo.</Alert>
            </div>
        );
    }
}
export default NeutralResponse;