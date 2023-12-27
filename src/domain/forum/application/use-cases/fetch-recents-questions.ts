import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/question-repository'
import { Injectable } from '@nestjs/common'

interface FetchRecentsQuestionsUseCaseRequest {
  page: number
}

type FetchRecentsQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

@Injectable()
export class FetchRecentsQuestionsUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    page,
  }: FetchRecentsQuestionsUseCaseRequest): Promise<FetchRecentsQuestionsUseCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page })

    return right({ questions })
  }
}
