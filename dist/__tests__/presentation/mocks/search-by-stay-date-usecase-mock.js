"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHotelRoomByStayDateMock = void 0;
class SearchHotelRoomByStayDateMock {
    constructor() {
        this.result = [{
                name: 'Master',
                price: 'R$ 975,65',
                description: 'São 6 quartos luxuosos, sofisticados e decorados com requinte, além de localização privilegiada em nosso hotel. Alguns possuem mezanino e ou...',
                image: 'https://media.omnibees.com/Images/5462/RoomTypes/192355.jpg'
            }];
    }
    async call(checkin, checkout) {
        return this.result;
    }
}
exports.SearchHotelRoomByStayDateMock = SearchHotelRoomByStayDateMock;
//# sourceMappingURL=search-by-stay-date-usecase-mock.js.map