import { ScrapingResult } from '@/data/models/browser'
import { Page } from 'puppeteer'

export const getHotelRoomPageFunction = async (page: Page): Promise<ScrapingResult> => {
  return await page.evaluate(() => {
    const scrapingResult = { data: [] }
    document.querySelectorAll('.roomrate:not(.d-none)').forEach(element => {
      const name = element.querySelectorAll('.hotel_name')[0].textContent.trim()
      const price = element.querySelectorAll('.price-total')[0].textContent.trim()
      const image = element.querySelectorAll('.image-step2')[0].getAttribute('src')
      const description = element.querySelectorAll('.hotel-description')[0].textContent.replace('(ver mais)', '').trim()
      const room = {
        name,
        price,
        description,
        image
      }
      scrapingResult.data.push(room)
    })

    return scrapingResult
  })
}
