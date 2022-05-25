import mongoose from 'mongoose'
import { array, name, email, date } from 'minifaker'
import 'minifaker/locales/en'
import 'dotenv/config'

import { UserDocument, UserSchema } from '../mongoose/schema'

export default async function seedDatabase(numberOfUsers = 100): Promise<void> {
  const mockUsers = array(numberOfUsers, () => ({
    firstName: name(),
    lastName: name(),
    email: email(),
    dateOfBirth: date(),
  }))

  console.log('connecting to database')
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('connected')

  const model = mongoose.model<UserDocument>('Usermodels', UserSchema)

  console.log('seeding users')
  await model.create(...mockUsers)
  console.log('seeding users -- done')

  process.exit(0)
}

seedDatabase()
