const mongoose = require('mongoose')

const { Users } = require('./Users')

const config = require('../config')

async function connect () {
  if (mongoose.connection.readyState !== 1 /* connected */) {
    console.log(config)
    await mongoose.connect(config.mongodb.connectionString, config.mongodb.options)
  }
}

module.exports = {
  Users,
  connect
}
