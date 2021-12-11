import axios from "axios";

let endpoint = "http://localhost:8080";
const ApiService = {
    analyzeText: function (text) {
        axios.post(endpoint + "/como-estas/analiza", text)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
    }
};

export default ApiService;