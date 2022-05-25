const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true,
        unique: true
    },
    foto1: {
         type: String
    },
    descripcionfoto1: {
        type: String       
    },
    foto2: {
        type: String             
   },
   descripcionfoto2: {
       type: String       
   },
  
});
const Cliente = mongoose.model('Cliente', storeSchema);

module.exports = {Cliente}