import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add GET - /
router.get('/', (req, res) => {
  res.status(200).send({ message: 'OK' })
})

// Export the server middleware
export default {
  path: '/health',
  handler: router
}
