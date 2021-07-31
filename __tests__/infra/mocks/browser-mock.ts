
import { IBrowser, ScrapingResult } from '@/data/models/browser'
export class BrowserMock implements IBrowser {
  public result = {
    data: [
      {
        name: 'Standard',
        price: 'R$ 1.501,00',
        description: 'Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Standar...',
        image: 'https://media.omnibees.com/Images/5462/RoomTypes/189952.jpg'
      },
      {
        name: 'Luxo',
        price: 'R$ 1.596,00',
        description: 'Confortavelmente decorado para fazer da sua estadia um momento de prazer e bem-estar. Os quartos da categoria Luxo contam Ar climatizado, TV...',
        image: 'https://media.omnibees.com/Images/5462/RoomTypes/152620.png'
      },
      {
        name: 'Luxo Superior',
        price: 'R$ 1.786,00',
        description: 'Exclusividade e requinte. Todos os quartos luxo superior contam com Ar climatizado, TV LCD 32”, SKY, frigobar, telefone, cofre e secador de...',
        image: 'https://media.omnibees.com/Images/5462/RoomTypes/152623.png'
      },
      {
        name: 'Master',
        price: 'R$ 2.071,00',
        description: 'São 6 quartos luxuosos, sofisticados e decorados com requinte, além de localização privilegiada em nosso hotel. Alguns possuem mezanino e ou...',
        image: 'https://media.omnibees.com/Images/5462/RoomTypes/192355.jpg'
      }
    ]
  }

  async bootstrap (url: string): Promise<void> {
  }

  async close (): Promise<void> {
  }

  async scrape (): Promise<ScrapingResult> {
    return this.result
  }
}
