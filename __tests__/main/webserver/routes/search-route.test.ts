import app from '@/main/webserver/config/app'

import request from 'supertest'
jest.setTimeout(50000)

describe('POST /search', () => {
  test('Should return 400 if request body is empty', async () => {
    await request(app)
      .post('/search')
      .send({ })
      .expect(400)
  })

  test('Should return 400 if parameter is invalid date format', async () => {
    const body = {
      checkin: 'x',
      checkout: 'x'
    }

    await request(app)
      .post('/search')
      .send(body)
      .expect(400)
  })

  test('Should return 200', async () => {
    const checkin = new Date()
    const checkout = new Date()

    checkin.setDate(checkin.getDate() + 1)
    checkout.setDate(checkout.getDate() + 2)

    const body = {
      checkin: checkin.toLocaleDateString('en-CA'),
      checkout: checkout.toLocaleDateString('en-CA')
    }

    await request(app)
      .post('/search')
      .send(body)
      .expect(200)
  })
})
