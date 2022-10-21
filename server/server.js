import express from 'express'
import sequelize from './config/connection.js';

const app = express()

const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
  res.json({ message: "Hello" })
})

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})
