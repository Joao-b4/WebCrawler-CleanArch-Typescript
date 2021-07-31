import { IBrowser, ScrapingResult } from '@/data/models/browser'
import puppeteer, { Browser, Page } from 'puppeteer'

type PageFunction = (page: Page) => Promise<ScrapingResult>

export class PuppeteerAdapter implements IBrowser {
  browser: Browser
  page: Page

  constructor (private readonly pageFunction: PageFunction) {
  }

  async bootstrap (url: string): Promise<void> {
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
    await this.page.goto(url)
  }

  async close (): Promise<void> {
    if (!this.browser) {
      return
    }
    await this.browser.close()
  }

  async scrape (): Promise<ScrapingResult> {
    return await this.pageFunction(this.page)
  }
}
