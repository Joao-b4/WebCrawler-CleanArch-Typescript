"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crawler_search_datasource_mock_1 = require("../mocks/crawler-search-datasource-mock");
const hotel_room_repository_1 = require("@/infra/repositories/hotel-room-repository");
const makeSut = () => {
    const datasource = new crawler_search_datasource_mock_1.SearchDatasourceMock();
    const sut = new hotel_room_repository_1.HotelRoomRepository(datasource);
    return {
        sut,
        crawlerSearcDatasource: datasource
    };
};
describe('HotelRoom Repository', () => {
    test('Should be return HotelRoom Colletion', async () => {
        const { sut, crawlerSearcDatasource } = makeSut();
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() + 1);
        checkout.setDate(checkin.getDate() + 2);
        const usecase = await sut.searchByStayDate(checkin, checkout);
        expect(usecase).toEqual(crawlerSearcDatasource.result);
    });
});
//# sourceMappingURL=hotel-room-repository.spec.js.map