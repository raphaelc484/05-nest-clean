import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { Either, right } from '@/core/either'
import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'
import { AnswerAttachmentList } from '../../enterprise/entities/answer-attachment-list copy'
import { Injectable } from '@nestjs/common'

interface AnswerQuestionUseCaseRequest {
  authorId: string
  questionId: string
  attachmentsIds: string[]
  content: string
}

type AnswerQuestionUseCaseResponse = Either<null, { answer: Answer }>

@Injectable()
export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    authorId,
    questionId,
    content,
    attachmentsIds,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(authorId),
      questionId: new UniqueEntityId(questionId),
    })

    const answerAttachments = attachmentsIds.map((attachmentsId) => {
      return AnswerAttachment.create({
        attachmentId: new UniqueEntityId(attachmentsId),
        answerId: answer.id,
      })
    })

    answer.attachments = new AnswerAttachmentList(answerAttachments)

    await this.answerRepository.create(answer)

    return right({
      answer,
    })
  }
}
