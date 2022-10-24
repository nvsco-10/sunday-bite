import express from 'express'
import cors from 'cors'
import sequelize from './config/connection.js';

const app = express()

// import { dirname } from 'path'
// import { fileURLToPath } from 'url'
// import path from 'path'

import PositionsRouter from './routes/PositionsRoutes.js'
import menuItemRouter from './routes/menuItemsRoutes.js'

// const __dirname = dirname(fileURLToPath(import.meta.url))

// only when ready to deploy
// app.use(express.static(path.resolve(__dirname, '../client/build')))

// app.use(express.static(path))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/careers', PositionsRouter)
app.use('/api/v1/menu', menuItemRouter)

app.get('/', (req,res) => {
  res.json({msg: 'hello!'});
})

// only when ready to deploy
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})
