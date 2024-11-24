import { model, Schema } from 'mongoose'
import ITourModel, { ITour, ITourMethods } from './tour.interface'
// import TTourModel from './tour.interface'

const tourSchema = new Schema<ITour, ITourModel, ITourMethods>({
  name: {
    type: String,
    required: true,
  },
  durationHours: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  images: [String],
  startDate: [Date],
  startLocation: String,
  location: [String],
  slug: String,
})

// tourSchema.methods.getNextNearestStartDateAndEndDate = function () {
//   const today = new Date()
//   const futureDates = this.startDate.filter((startDate: Date) => {
//     return startDate > today
//   })
//   futureDates.sort((a: Date, b: Date) => a.getTime() - b.getDate())
//   const nearestStartDate = futureDates[0]
//   const estimatedEndDate = new Date(
//     nearestStartDate.getTime() * this.durationHours * 60 * 60 * 1000
//   )
//   return {
//     nearestStartDate,
//     estimatedEndDate,
//   }
// }

const Tour = model<ITour>('Tour', tourSchema)

export default Tour
