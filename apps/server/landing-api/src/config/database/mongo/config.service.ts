import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MongoDBConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return <string>this.configService.get<string>('db.host')
  }

  get name(): string {
    return <string>this.configService.get<string>('db.name')
  }
}
