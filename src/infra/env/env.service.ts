import { ConfigService } from '@nestjs/config'
import { Env } from './env'
import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService<Env, true>) {}

  get<T extends keyof Env>(key: keyof Env) {
    return this.configService.get<T>(key, { infer: true })
  }
}
