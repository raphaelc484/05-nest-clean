import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { JwtService } from '@nestjs/jwt'

export class JwtEncrypter implements Encrypter {
  constructor(private jwtService: JwtService) {}

  encrypt(paylod: Record<string, unknown>): Promise<string> {
    return this.jwtService.signAsync(paylod)
  }
}
