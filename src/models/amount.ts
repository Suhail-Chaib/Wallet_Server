const mongoose = require("mongoose");

//Modelo de objeto que se guarda en la BBDD de MongoDB
const amountSchema = new mongoose.Schema({
    amount: {
        type: String
    },
    n:{
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface Iamount extends Document {
    amount: String;
    n: String
}

//Exportamos modelo para poder usarlo
const amount = mongoose.model("amount", amountSchema);

module.exports = amount;
