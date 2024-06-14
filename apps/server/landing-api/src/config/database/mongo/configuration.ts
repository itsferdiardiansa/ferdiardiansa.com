import { registerAs } from '@nestjs/config'

export default registerAs('db', () => ({
  host: process.env.DATABASE_HOST,
  name: process.env.DATABASE_NAME,
}))
