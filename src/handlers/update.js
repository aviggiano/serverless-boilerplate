const { OK } = require('../services/http')
const { Users, connect } = require('../models')

async function users (event) {
  await connect()

  const filters = event.pathParameters || {}
  const body = JSON.parse(event.body) || {}
  console.log({ filters, body })

  const items = await Users.findOneAndUpdate({ ...filters, deleted: false }, body, { new: true })
  console.log({ items })

  return OK(items)
}

module.exports = {
  users
}
