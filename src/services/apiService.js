import axios from "axios";

let endpoint = "http://localhost:8080";

export const analyzeText = async (text) => {
    let data = await axios.post(endpoint + "/como-estas/analiza", text, {headers: {"Content-type": "text/plain"}})
    if(data.status === 200) {
        console.log(data.data);
        return data.data;
    }
}

export const enviarFrase = async (id,frase) => {
    let uri = endpoint + "/motivate/motiva/"+ id;
    console.log(uri);
    let data = await axios.post(uri, frase, {headers: {"Content-type": "text/plain"}});
    console.log(data);
}