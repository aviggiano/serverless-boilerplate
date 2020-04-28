module.exports = {
  mongodb: {
    connectionString: process.env.MONGODB_CONNECTION_STRING,
    options: { useFindAndModify: false }
  }
}
