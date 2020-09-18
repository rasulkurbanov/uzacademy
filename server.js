const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const bootcamps = require('./routes/bootcamps')
const errorHandler = require('./middleware/errorHandler.js')

dotenv.config({path: './config/config.env'})


//Connect to MongoDB
connectDB()


const app = express()

app.use(express.json())


if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


//Using routes as a middleware function
app.use('/api/v1/bootcamps', bootcamps)


app.use(errorHandler)

const PORT = process.env.PORT || 5500




app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.brightCyan.bold))






// const server = app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightCyan.bold))

//Handling unhandled promises
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`.red)

//   //Close server and exit
//   server.close(() => process.exit(1))
// })