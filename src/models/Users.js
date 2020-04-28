const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: String,
  email: { type: String, unique: true }
},
{
  timestamps: true
})
schema.plugin(require('mongoose-autopopulate'))
schema.plugin(require('mongoose-delete'))

let Users
try {
  Users = mongoose.model('user')
} catch (error) {
  Users = mongoose.model('user', schema)
}

module.exports = {
  Users
}
