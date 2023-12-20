import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaQuestionCommentRepository } from './prisma/repositories/prisma-question-comment-repository'
import { PrismaQuestionRepository } from './prisma/repositories/prisma-question-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answer-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { PrismaAnswerCommentRepository } from './prisma/repositories/prisma-answer-comment-repository'
import { QuestionRepository } from '@/domain/forum/application/repositories/question-repository'

@Module({
  providers: [
    PrismaService,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentRepository,
    {
      provide: QuestionRepository,
      useClass: PrismaQuestionRepository,
    },
    PrismaAnswerRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentRepository,
  ],
  exports: [
    PrismaService,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentRepository,
    QuestionRepository,
    PrismaAnswerRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentRepository,
  ],
})
export class DatabaseModule {}
