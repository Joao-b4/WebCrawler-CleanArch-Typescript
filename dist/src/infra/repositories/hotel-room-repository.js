"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRoomRepository = void 0;
const date_fns_1 = require("date-fns");
class HotelRoomRepository {
    constructor(searchDatasource) {
        this.searchDatasource = searchDatasource;
    }
    async searchByStayDate(checkin, checkout) {
        const checkinFormatted = date_fns_1.format(checkin, 'ddMMyyyy');
        const checkoutFormatted = date_fns_1.format(checkout, 'ddMMyyyy');
        return this.searchDatasource.search({ checkin: checkinFormatted, checkout: checkoutFormatted });
    }
}
exports.HotelRoomRepository = HotelRoomRepository;
//# sourceMappingURL=hotel-room-repository.js.map