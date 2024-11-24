// req and res managing
import { Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    const result = await userService.createUser(payload)
    res.send({
      success: true,
      message: 'user crated succesfully',
      data: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong.',
      error: error,
    })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser()
    res.send({
      status: true,
      message: 'Users getting succesfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong.',
      error: error,
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await userService.getSingleUser(userId)
    res.send({
      status: true,
      message: 'Users getting succesfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong.',
      error: error,
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.deleteUser(req.params.userId)
    res.send({
      status: true,
      message: 'Users deleted succesfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong.',
      error: error,
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = await req.params.userId
    const body = req.body
    const result = await userService.updateUser(userId, body)
    res.send({
      status: true,
      message: 'User updated succesfully',
      result: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong.',
      error: error,
    })
  }
}

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  deleteUser,
  updateUser,
}
