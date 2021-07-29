import { SearchByStayDateController } from '@/presentation/controllers/'
import { Controller } from "@/presentation/interfaces"

export const makeSearchByStayDateController = (): Controller => {
    // dependency injection
    // const repository = new FakeDbRankingRepository()
    // const loader = new LastRankingLoaderService(repository)
    return new SearchByStayDateController()
  }
  