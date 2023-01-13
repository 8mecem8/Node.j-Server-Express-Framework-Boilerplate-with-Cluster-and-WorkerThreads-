const logger = require('./logger')
const path = require('path')


const requestLogger = (request, response, next) => 
{
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}


//In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them,
// instead of that we gonna use unknownEndpoint at the end of all routes list ** otherwise we gonna always get
//404 page error ın the front end be careful using this 
const unknownEndpoint = (request, response) => 
{
  response.status(404).sendFile(path.join(__dirname, '../404/404.html'))
}


const errorHandler = (error, request, response, next) => 
{
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token'
    })
  }

  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}