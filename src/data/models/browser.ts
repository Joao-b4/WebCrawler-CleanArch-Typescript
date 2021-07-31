
export interface IBrowser{
  bootstrap: (url: string) => Promise<any>
  close: () => Promise<void>
  scrape: () => Promise<ScrapingResult>
}

export class ScrapingResult {
  data: any
}
