import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.get('/sss',function (req, res){
  const getPosts = async () => {

    const stringifiedQuery = await payload.find({collection:"images",where:{'tags.title':{equals:'外観'}}})
    console.log(stringifiedQuery.docs[0].tags)
  }

  res.send(getPosts())
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}
start()


