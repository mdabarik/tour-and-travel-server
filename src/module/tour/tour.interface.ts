import { Model } from 'mongoose'

export interface ITour {
  name: string
  durationHours: number
  averageRating: number
  price: number
  coverImage: string
  images: string[]
  startDate: [Date]
  startLocation: string
  location: string[]
  slug: string
}

export interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    neartestStartDate: Date | null
    estimatedDate: Date | null
  }
}

type TTourModel = Model<ITour, Record<string, unknown>, ITourMethods>

export default TTourModel
