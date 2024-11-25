const mongoose = require ('mongoose')
const URI =('mongodb://127.0.0.1:27017/ue-eats')

const connectToMongo=()=>{
  mongoose.connect(URI) 
}

module.exports = {connectToMongo};


// const mongoose = require ('mongoose')
// mongoose.connect = ('mongodb://localhost:27017/inotebook')
// const db = mongoose.connection;

// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//   console.log('connected to mongodb')a
// })
// module.exports = db;