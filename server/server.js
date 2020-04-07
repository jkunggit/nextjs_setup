const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production' // boolean value

const app = next({ dev })

const handle = app.getRequestHandler() // next to take care of the heavy lifting for us

module.exports = async () => {
  await app.prepare() // prepare to go into the next framework then once done, launch into our express server
  try {
    console.log('trying to start server')
    const server = express()

    const showRoutes = require('./routes/index.js')
    server.use('/api', showRoutes)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // route middleware to handle http request errors
    server.use((err, req, res, next) => {
      res.send(500, err.message)
      next()
    })

    const httpServer = server.listen(PORT)

    return { httpServer, server }
  } catch (exceptions) {
    console.log(exceptions.stack)
    process.exit(1)
  }
}
