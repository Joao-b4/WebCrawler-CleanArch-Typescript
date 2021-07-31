"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("@/presentation/http/controllers");
const models_1 = require("@/presentation/http/models");
const search_by_stay_date_usecase_mock_1 = require("../mocks/search-by-stay-date-usecase-mock");
const mockRequest = () => {
    return {
        headers: {},
        body: {},
        params: {}
    };
};
const makeSut = () => {
    const usecase = new search_by_stay_date_usecase_mock_1.SearchHotelRoomByStayDateMock();
    const sut = new controllers_1.SearchByStayDateController(usecase);
    return {
        sut,
        searchHotelRoomByStayDate: usecase
    };
};
describe('SearchByStayDate Controller', () => {
    test('Should be HotelRoom Colletion', async () => {
        const { sut, searchHotelRoomByStayDate } = makeSut();
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() - 1);
        checkout.setDate(checkin.getDate() + 2);
        const request = mockRequest();
        request.body = { checkin, checkout };
        const httpResponse = await sut.handle(request);
        expect(httpResponse).toEqual(models_1.HttpResponseServerOk(searchHotelRoomByStayDate.result));
    });
    test('Should return 400 if body is empty', async () => {
        const { sut } = makeSut();
        const request = mockRequest();
        request.body = {};
        const httpResponse = await sut.handle(request);
        expect(httpResponse.statusCode).toEqual(400);
    });
});
//# sourceMappingURL=search-by-stay-date-controller.spec.js.map