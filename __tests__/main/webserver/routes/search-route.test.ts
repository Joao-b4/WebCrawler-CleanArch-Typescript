import app from '@/main/webserver/config/app'

import request from 'supertest'

describe('POST /search', () => {
  test('Should return 400', async () => {
    await request(app)
      .post('/search')
      .send({ })
      .expect(400)
  })
  test('Should return 200 an SearchByStayDate', async () => {
    const checkin = new Date()
    const checkout = new Date()

    checkin.setDate(checkin.getDate() + 1)
    checkout.setDate(checkin.getDate() + 2)

    await request(app)
      .post('/search')
      .send({
        checkin: checkin.toISOString(),
        checkout: checkout.toISOString()
      })
      .expect(200)
  })
})
