"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHotelRoomByStayDate = void 0;
const search_error_1 = require("@/domain/errors/search-error");
class SearchHotelRoomByStayDate {
    constructor(hotelRoomRepository) {
        this.hotelRoomRepository = hotelRoomRepository;
    }
    async call(checkin, checkout) {
        if (!checkin || !checkout) {
            throw new search_error_1.SearchParameterInvalid('empty');
        }
        if (checkin < new Date()) {
            throw new search_error_1.SearchParameterInvalid('checkin');
        }
        if (checkout <= checkin) {
            throw new search_error_1.SearchParameterInvalid('checkout');
        }
        const hotelRoomModel = this.hotelRoomRepository.searchByStayDate(checkin, checkout);
        return hotelRoomModel;
    }
}
exports.SearchHotelRoomByStayDate = SearchHotelRoomByStayDate;
//# sourceMappingURL=search-by-stay-date.js.map