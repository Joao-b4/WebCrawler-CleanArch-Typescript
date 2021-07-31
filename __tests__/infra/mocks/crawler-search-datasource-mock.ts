
import { HotelRoom } from '@/domain/entities'
import { ISearchDatasource } from '@/data/models/search-datasource'
export class SearchDatasourceMock implements ISearchDatasource {
  public result = [{ name: 'Test1',description: 'Test-description',image: 'https://google.com',price: 'R$ 160.00' }]
  async search ({ check,chekout }): Promise<HotelRoom[]> {
    return this.result
  }
}
