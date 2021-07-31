"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHotelRoomByStayDateMock = void 0;
class SearchHotelRoomByStayDateMock {
    constructor() {
        this.result = [{ name: 'Test1', description: 'Test-description', image: 'https://google.com', price: 'R$ 160.00' }];
    }
    async call(checkin, checkout) {
        return this.result;
    }
}
exports.SearchHotelRoomByStayDateMock = SearchHotelRoomByStayDateMock;
//# sourceMappingURL=search-by-stay-date-usecase-mock.js.map