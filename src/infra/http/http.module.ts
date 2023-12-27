import { Module } from '@nestjs/common'
import { CreateaccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { FetchRecentsQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recents-questions'

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateaccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [CreateQuestionUseCase, FetchRecentsQuestionsUseCase],
})
export class HttpModule {}
