import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

export const schema = {
  username: {
    type: String,
    default: this.email,
  },
  password: {
    type: String,
    required: [true, 'User password is required.'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'User email is required.'],
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'note',
  }],
}

const userSchema = new mongoose.Schema(schema, { timestamps: true })

userSchema.pre('save', function (next) {
  this.password = this.hashPassword(this.password)
  next()
})

userSchema.methods = {
  authenticate(plainTextPassword) {
    return bcrypt.compareSync(plainTextPassword, this.password)
  },

  hashPassword(plainTextPassword) {
    if (!plainTextPassword) {
      throw new Error('Could not save user')
    }

    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

export const User = mongoose.model('user', userSchema)
