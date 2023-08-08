const mongoose = require('mongoose');

const dbConnect = async ()=>{
mongoose.connect(process.env.MONGODB_URI)
.then( (conn)=>{
console.log(`connected to db successfully: ${conn.connection.host}`)
})
.catch( (err)=>{
console.log("ERROR:",err.message);
process.exit(1);
})

}


module.exports = dbConnect;