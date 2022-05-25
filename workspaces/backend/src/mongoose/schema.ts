import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = UserModel & Document

@Schema()
export class UserModel {
  @Prop()
  firstName: string

  @Prop()
  lastName: string

  @Prop()
  email: string

  @Prop()
  dateOfBirth: Date
}

export const UserSchema = SchemaFactory.createForClass(UserModel)
