import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: [true, 'Please provide your email'],
  },
  email: {
    type: String,
    required: [true, 'please provide your name'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      },
      message: '{VALUE} is not a  valid email',
    },
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} Please provide a valid role',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: {
      values: ['active', 'inactive'],
      message: '{VALUE} Please provide a valid role',
    },
    required: true,
    defalut: 'active',
  },
})

// hook -> pre
/*
userSchema.pre('find', function (this, next) {
  this.find({
    userStatus: { $eq: 'active' },
  })
  next()
})

// hook -> post
userSchema.post('find', function (docs, next) {
  docs.forEach((doc: IUser) => {
    doc.name = doc.name.toUpperCase()
  })
  next()
}) */

const User = model<IUser>('User', userSchema)
export default User
