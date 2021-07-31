"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/main/webserver/config/app"));
const supertest_1 = __importDefault(require("supertest"));
describe('Content Type Middleware', () => {
    test('Should return default content type as json', async () => {
        app_1.default.get('/test_content_type', (req, res) => {
            res.send('');
        });
        await supertest_1.default(app_1.default)
            .get('/test_content_type')
            .expect('content-type', /json/);
    });
    test('Should return xml content type when forced', async () => {
        app_1.default.get('/test_content_type_xml', (req, res) => {
            res.type('xml');
            res.send('');
        });
        await supertest_1.default(app_1.default)
            .get('/test_content_type_xml')
            .expect('content-type', /xml/);
    });
});
//# sourceMappingURL=content-type.test.js.map