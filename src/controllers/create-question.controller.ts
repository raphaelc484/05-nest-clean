import { Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  @Post()
  async handle() {
    return 'ok'
  }
}
