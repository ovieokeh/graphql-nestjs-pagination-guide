import { Model } from 'mongoose'

import { UserDocument, UserModel } from '../mongoose/schema'

export default async function seedDatabase(
  model: Model<UserDocument>,
): Promise<boolean> {
  const users: UserModel[] = [
    {
      firstName: 'Mattia',
      lastName: 'Parisi',
      email: 'mattiaparisi@gmail.com',
      dateOfBirth: new Date(),
    },
    {
      firstName: 'Alessia',
      lastName: 'Ciccarello',
      email: 'alessiaciccarello@gmail.com',
      dateOfBirth: new Date(),
    },
    {
      firstName: 'Ciccio',
      lastName: 'Belo',
      email: 'cicciobelo@gmail.com',
      dateOfBirth: new Date(),
    },
    {
      firstName: 'Santo',
      lastName: 'Terranova',
      email: 'santoterranova@gmail.com',
      dateOfBirth: new Date(),
    },
    {
      firstName: 'Damiano',
      lastName: 'Pulvirenti',
      email: 'damianopulvirenti@gmail.com',
      dateOfBirth: new Date(),
    },
    {
      firstName: 'Enrico',
      lastName: 'Bruno',
      email: 'enricobruno@gmail.com',
      dateOfBirth: new Date(),
    },
  ]

  await model.create(...users)
  return true
}
