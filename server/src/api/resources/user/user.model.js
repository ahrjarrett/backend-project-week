import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export const schema = {
  email: {
    type: String,
    unique: true,
    required: [true, 'User email is required.'],
  },

  password: {
    type: String,
    required: [true, 'User password is required.'],
  },

  username: {
    type: String,
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

    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(plainTextPassword, salt)
  }
}

export const User = mongoose.model('user', userSchema)
