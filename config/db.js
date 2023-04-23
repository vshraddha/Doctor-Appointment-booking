const mongoose = require('mongoose')
const colors = require('colors')
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("database connected successfully!");
//   } catch (error) {
//     console.log(`Mongodb Server Issue ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;



const connectDB =  async ()=>{

  try{
      const conn = await mongoose.connect(process.env.MONGO_URI,{
          //must add in order to not get any error masseges:
          useUnifiedTopology:true,
          useNewUrlParser: true,
          useCreateIndex: true
      })
      console.log(`mongo database is connected!!! `)
  }catch(error){
      console.error(`Error: ${error} `)
      process.exit(1) //passing 1 - will exit the proccess with error
  }

}
module.exports= connectDB