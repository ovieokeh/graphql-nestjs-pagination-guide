import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from './users/users.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from '../nest.config'

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('databaseUrl'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      include: [UsersModule],
    }),
  ],
})
export class AppModule {}
