import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { UserDocument, UserModel } from '../mongoose/schema'
import { FetchUsersArgs } from './dto/fetch-users.input'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
  ) {}

  async getCount(): Promise<number> {
    const count = await this.userModel.countDocuments()
    return count
  }

  async findAll(args: FetchUsersArgs = { skip: 0, take: 5 }): Promise<User[]> {
    const users: User[] = (await this.userModel.find(null, null, {
      limit: args.take,
      skip: args.skip,
    })) as User[]

    return users
  }
}
