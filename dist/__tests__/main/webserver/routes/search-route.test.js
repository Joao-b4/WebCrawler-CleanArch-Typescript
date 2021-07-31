"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/main/webserver/config/app"));
const supertest_1 = __importDefault(require("supertest"));
jest.setTimeout(50000);
describe('POST /search', () => {
    test('Should return 400 if request body is empty', async () => {
        await supertest_1.default(app_1.default)
            .post('/search')
            .send({})
            .expect(400);
    });
    test('Should return 400 if parameter is invalid date format', async () => {
        const body = {
            checkin: 'x',
            checkout: 'x'
        };
        await supertest_1.default(app_1.default)
            .post('/search')
            .send(body)
            .expect(400);
    });
    test('Should return 200', async () => {
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() + 1);
        checkout.setDate(checkout.getDate() + 2);
        const body = {
            checkin: checkin.toLocaleDateString('en-CA'),
            checkout: checkout.toLocaleDateString('en-CA')
        };
        await supertest_1.default(app_1.default)
            .post('/search')
            .send(body)
            .expect(200);
    });
});
//# sourceMappingURL=search-route.test.js.map