import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserModel, UserSchema } from '../mongoose/schema'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
