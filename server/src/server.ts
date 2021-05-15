import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import itemsRoute from '@routes/items'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', itemsRoute)

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
