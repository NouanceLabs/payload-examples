import express from 'express'
import payload from 'payload'
import type { User } from 'payload/dist/auth'
import type { Request } from 'express'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

interface RequestWithUser extends Request {
  user: User
}

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  const router = express.Router()
  router.use(payload.authenticate)

  router.get('/', (req: RequestWithUser, res) => {
    if (req.user) {
      return res.send(`Authenticated successfully as ${req.user.email}.`)
    }

    return res.send('Not authenticated')
  })

  app.use('/some-route-here', router)

  app.listen(3000)
}

start()
