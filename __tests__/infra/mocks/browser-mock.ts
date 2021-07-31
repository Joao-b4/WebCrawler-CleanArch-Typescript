
import { IBrowser, ScrapingResult } from '@/data/models/browser'
export class BrowserMock implements IBrowser {
  public result = { data: [{ name: 'Test1',description: 'Test-description',image: 'https://google.com',price: 'R$ 160.00' }] }
  async bootstrap (url: string): Promise<void> {
  }

  async close (): Promise<void> {
  }

  async scrape (): Promise<ScrapingResult> {
    return this.result
  }
}
