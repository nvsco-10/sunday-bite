import CareersPosition from '../models/CareersPosition.js'

const createPosition = async (req,res) => {
  const { title } = req.body

  if (!title) {
    res.status(500).json({ message: 'Please provide a position title.' })
    return
  }

  const position = await CareersPosition.create(req.body)

  res.status(200).json(position)
}

export { createPosition }