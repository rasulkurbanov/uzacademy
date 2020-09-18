const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')
const Bootcamp = require('./models/Bootcamp.js')

dotenv.config({path: './config/config.env'})


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true
})

//Read JSON file
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))


console.log(__dirname)

//Import data to database
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps)
    console.log('Data imported to database...'.green.underline)
    process.exit()
  }
  catch(err) {
    console.error(err)
  }
}


//Delete data from database
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany()
    console.log("Data is deleted from database".red.underline)
    process.exit()
  }
  catch(err) {
    console.error(err)
  }
}

if(process.argv[2] === 'i') {
  importData()
}
else if(process.argv[2] === 'd') {
  deleteData()
}









