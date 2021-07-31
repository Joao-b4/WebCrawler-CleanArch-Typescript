"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usecases_1 = require("@/data/usecases");
const search_error_1 = require("@/domain/errors/search-error");
const hotel_room_repository_mock_1 = require("./mocks/hotel-room-repository-mock");
const makeSut = () => {
    const repository = new hotel_room_repository_mock_1.HotelRoomRepositoryMock();
    const sut = new usecases_1.SearchHotelRoomByStayDate(repository);
    return {
        sut,
        hotelRoomRepository: repository
    };
};
describe('SearchByStayDate Usecase', () => {
    test('Should be throw SearchParameterInvalid.message(checkinInvalid)', async () => {
        const { sut } = makeSut();
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() - 1);
        checkout.setDate(checkin.getDate() + 2);
        const promise = sut.call(checkin, checkout);
        await expect(promise).rejects.toThrowError(new search_error_1.SearchParameterInvalid('checkinInvalid'));
    });
    test('Should be throw SearchParameterInvalid.message(checkoutInvalid)', async () => {
        const { sut } = makeSut();
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() + 2);
        checkout.setDate(checkin.getDate() + 1);
        const promise = sut.call(checkin, checkout);
        await expect(promise).rejects.toThrowError(new search_error_1.SearchParameterInvalid('checkoutInvalid'));
    });
    test('Should be HotelRoom Colletion', async () => {
        const { sut, hotelRoomRepository } = makeSut();
        const checkin = new Date();
        const checkout = new Date();
        checkin.setDate(checkin.getDate() + 1);
        checkout.setDate(checkout.getDate() + 2);
        const usecase = await sut.call(checkin, checkout);
        expect(usecase).toEqual(hotelRoomRepository.result);
    });
});
//# sourceMappingURL=search-by-stay-date.spec.js.map