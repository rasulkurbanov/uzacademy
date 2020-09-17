const mongoose = require('mongoose')



const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true
    })
    console.log(`Successfully connected to MongoDB via mongoose: ${conn.connection.host}`.yellow.bold)
  }
  catch(error) {
    console.log(`Error occured on connecting to MongoDB:`, error.message)
  }
}



module.exports = connectDB

// const connectDB = () => {
//   mongoose.connect('')
//     .then(() => console.log('Successfully connected to MongoDB database via mongoose'))
//     .catch(err => console.log('Error occurred while connecting', err))
// }