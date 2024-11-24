import { Request, Response } from 'express'
import { tourService } from './tour.service'

const createTour = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const result = await tourService.createTour(body)
    res.send({
      success: true,
      message: 'Tour created successfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const getTour = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTour()
    res.send({
      success: true,
      message: 'Tour get successfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.tourId
    const result = await tourService.getSingleTour(id)
    res.send({
      success: true,
      message: 'Tour get successfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.tourId
    const body = req.body
    const result = await tourService.updateTour(id, body)
    res.send({
      success: true,
      message: 'Tour updated successfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const deletetour = async (req: Request, res: Response) => {
  try {
    const id = req.params.tourId
    const result = await tourService.deleteTour(id)
    res.send({
      success: true,
      message: 'Tour deleted successfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

export const tourController = {
  getTour,
  createTour,
  getSingleTour,
  updateTour,
  deletetour,
}
