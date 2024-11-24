import { Router } from 'express'
import { tourController } from './tour.controller'

const tourRouter = Router()

tourRouter.get('/:tourId', tourController.getTour)
tourRouter.get('/', tourController.getTour)
tourRouter.post('/create-tour', tourController.createTour)
tourRouter.put('/:tourId', tourController.updateTour)
tourRouter.delete('/:tourId', tourController.deletetour)

export default tourRouter
