"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("@/presentation/http/middlewares");
const mockRequest = () => {
    return {
        headers: {},
        body: {},
        params: {}
    };
};
describe('SearchByStayDate Middleware', () => {
    test('Should return 400 if checkin and checkout is empty', async () => {
        const searchByStayDateMiddleware = new middlewares_1.SearchByStayDateMiddleware();
        const request = mockRequest();
        request.body = {};
        const httpResponse = await searchByStayDateMiddleware.handle(request);
        expect(httpResponse.statusCode).toEqual(400);
    });
    test('Should return 400 if checkin and checkout is not date format', async () => {
        const searchByStayDateMiddleware = new middlewares_1.SearchByStayDateMiddleware();
        const request = mockRequest();
        request.body = { checkin: '-', checkout: '-' };
        const httpResponse = await searchByStayDateMiddleware.handle(request);
        expect(httpResponse.statusCode).toEqual(400);
    });
    test('Should return 200 if checkin and checkout is date format', async () => {
        const searchByStayDateMiddleware = new middlewares_1.SearchByStayDateMiddleware();
        const request = mockRequest();
        request.body = { checkin: '2021-07-01', checkout: '2021-07-03' };
        const httpResponse = await searchByStayDateMiddleware.handle(request);
        expect(httpResponse.statusCode).toEqual(200);
    });
});
//# sourceMappingURL=search-by-stay-date-middleware.spec.js.map