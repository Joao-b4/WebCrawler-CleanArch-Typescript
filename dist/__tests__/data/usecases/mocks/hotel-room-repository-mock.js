"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRoomRepositoryMock = void 0;
class HotelRoomRepositoryMock {
    constructor() {
        this.result = [{ name: 'Test1', description: 'Test-description', image: 'https://google.com', price: 'R$ 160.00' }];
    }
    async searchByStayDate(checkin, checkout) {
        return this.result;
    }
}
exports.HotelRoomRepositoryMock = HotelRoomRepositoryMock;
//# sourceMappingURL=hotel-room-repository-mock.js.map