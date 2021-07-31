"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/main/webserver/config/app"));
const supertest_1 = __importDefault(require("supertest"));
describe('POST /search', () => {
    test('Should return 400', async () => {
        await supertest_1.default(app_1.default)
            .post('/search')
            .send({})
            .expect(400);
    });
    test('Should return 200 an SearchByStayDate', async () => {
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() + 1);
        checkout.setDate(checkin.getDate() + 2);
        await supertest_1.default(app_1.default)
            .post('/search')
            .send({
            checkin: checkin.toISOString(),
            checkout: checkout.toISOString()
        })
            .expect(200);
    });
});
//# sourceMappingURL=search-route.test.js.map