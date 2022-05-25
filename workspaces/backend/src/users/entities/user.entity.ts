import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  email: string

  @Field()
  dateOfBirth: Date
}
