import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/question-repository'

interface FetchRecentsTopicsUseCaseRequest {
  page: number
}

type FetchRecentsTopicsUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

export class FetchRecentsTopicsUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    page,
  }: FetchRecentsTopicsUseCaseRequest): Promise<FetchRecentsTopicsUseCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page })

    return right({ questions })
  }
}
