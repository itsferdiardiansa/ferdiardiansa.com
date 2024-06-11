import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DirectiveLocation, GraphQLDirective } from 'graphql'
import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        playground: process.env.NODE_ENV === 'development',
        path: '/gql',
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
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
