import express from 'express'
const router = express.Router()

import { 
  createPosition
} from '../controllers/careersPositionsController.js'

router.route('/')
  .post(createPosition)

export default router