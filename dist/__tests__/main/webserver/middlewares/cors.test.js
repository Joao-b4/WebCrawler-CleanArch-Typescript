"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/main/webserver/config/app"));
const supertest_1 = __importDefault(require("supertest"));
describe('CORS Middleware', () => {
    test('Should enable CORS', async () => {
        app_1.default.get('/test_cors', (req, res) => {
            res.send();
        });
        await supertest_1.default(app_1.default)
            .get('/test_cors')
            .expect('access-control-allow-origin', '*')
            .expect('access-control-allow-methods', '*')
            .expect('access-control-allow-headers', '*');
    });
});
//# sourceMappingURL=cors.test.js.map