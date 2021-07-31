"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/main/webserver/config/app"));
const supertest_1 = __importDefault(require("supertest"));
describe('Body Parser Middleware', () => {
    test('Should parse body as json', async () => {
        app_1.default.post('/test_body_parser', (req, res) => {
            res.send(req.body);
        });
        await supertest_1.default(app_1.default)
            .post('/test_body_parser')
            .send({ name: 'name' })
            .expect({ name: 'name' });
    });
});
//# sourceMappingURL=body-parser.test.js.map