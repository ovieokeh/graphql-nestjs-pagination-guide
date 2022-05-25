import { Resolver, Query, Args } from '@nestjs/graphql'

import { User } from './entities/user.entity'
import { UsersService } from './users.service'
import { FetchUsersArgs } from './dto/fetch-users.input'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => Number, { name: 'count' })
  async getCount(): Promise<number> {
    return this.usersService.getCount()
  }

  @Query(() => [User], { name: 'users' })
  async findAll(@Args() args: FetchUsersArgs): Promise<User[]> {
    return this.usersService.findAll(args)
  }
}
