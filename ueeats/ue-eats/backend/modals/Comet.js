const mongoose = require ('mongoose')
const {Schema} = mongoose;
const CommetSchema = new Schema({
    itemname:{
        type : String,
        required : true,
      
  },
   description:{
          type : String,
          required : true,
        
    },
  date:{
    type : String,
    default : Date.now
},
});
const Commet = mongoose.model('commet',CommetSchema)
// here we are exporting the model for the further use for the later on
module.exports = Commet