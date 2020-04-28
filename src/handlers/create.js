const { OK } = require('../services/http')
const { Users, connect } = require('../models')

async function users (event) {
  await connect()

  const body = JSON.parse(event.body) || {}

  console.log({ body })

  const response = await (new Users(body)).save()

  return OK(response)
}

module.exports = {
  users
}
