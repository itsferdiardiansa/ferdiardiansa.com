import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return <string>this.configService.get<string>('app.name')
  }

  get port(): string {
    return <string>this.configService.get<string>('app.port')
  }
}
