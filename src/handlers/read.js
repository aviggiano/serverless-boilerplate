const { OK } = require('../services/http')
const { Users, connect } = require('../models')

async function users (event) {
  await connect()

  const filters = event.queryStringParameters || {}
  console.log({ filters })

  const items = await Users.find({ ...filters, deleted: false })
  console.log(items)

  return OK(items)
}

module.exports = {
  users
}
