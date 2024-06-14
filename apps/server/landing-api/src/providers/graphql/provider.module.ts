import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DirectiveLocation, GraphQLDirective } from 'graphql'

const isDevelopment = process.env.NODE_ENV === 'development'
@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        playground: isDevelopment,
        path: '/gql',
        autoSchemaFile: true, // Change this to avoid file permission on Vercel Serverless Function
        buildSchemaOptions: {
          directives: [
            new GraphQLDirective({
              name: 'upper',
              locations: [DirectiveLocation.FIELD_DEFINITION],
            }),
          ],
        },
        formatError: error => {
          const originalError = error.extensions?.originalError as {
            message: string
          }

          if (!originalError) {
            return {
              message: error.message,
              code: error.extensions?.code,
            }
          }

          return {
            message: originalError.message,
            code: error.extensions?.code,
          }
        },
      }),
    }),
  ],
})
export class GraphQLProviderModule {}
