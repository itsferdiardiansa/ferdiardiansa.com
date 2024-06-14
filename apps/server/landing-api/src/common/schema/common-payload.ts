// import { ObjectType, Field, createUnionType } from '@nestjs/graphql'
// import { ErrorCode, SuccessCode } from '@oxcyn/response'

// @ObjectType()
// class StringValue {
//   @Field(() => String)
//   value: string
// }

// @ObjectType()
// class StringArrayValue {
//   @Field(() => [String])
//   value: string[]
// }

// const MessageTypes = createUnionType({
//   name: 'MessageTypes',
//   types: () => [StringValue, StringArrayValue],
// })

// @ObjectType({
//   description: 'Common payload for every mutations',
// })
// export class MutationCommonPayload {
//   @Field(() => Number)
//   code: ErrorCode & SuccessCode

//   @Field(() => String)
//   message: string
// }
