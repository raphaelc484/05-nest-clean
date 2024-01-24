import { Either, right } from '@/core/either'
import { QuestionCommentRepository } from '../repositories/question-comment-repository'
import { Injectable } from '@nestjs/common'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsUseCaseResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>

@Injectable()
export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentRepository: QuestionCommentRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const comments =
      await this.questionCommentRepository.findManyByQuestionIdWithAuthor(
        questionId,
        {
          page,
        },
      )

    return right({ comments })
  }
}
