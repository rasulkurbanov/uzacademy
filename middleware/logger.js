//@desc Logs request to console

const logger = (req, res, next) => {
  req.greeting = 'Assalomu alaykum from logger middleware function'
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  console.log('Middleware is running')
  next()
}

module.exports = logger