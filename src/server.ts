import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.get('/test',async (req, res)=>{
console.log("------------");
// console.log("payload.db.drizzle 1111111111 ",payload.db.drizzle.query);
// const collections = payload.collections;
// console.log("collections >>>", collections);
// Assuming payload is your object
const tables = Object.keys(payload.db.drizzle.query);

for (const table of tables) {
  const schema = payload.db.drizzle.query[table].fullSchema;
  console.log(`Schema for >>>>>> ${table}:`, schema);
}
  // const stringifiedQuery = await payload.find({collection:"images",where:{'tags.title':{equals:'外観'}}})
  // console.log(stringifiedQuery.docs[0].tags)
return res.send("ok")
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

  app.listen(3001)
}
start()


