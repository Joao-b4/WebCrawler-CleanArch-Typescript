"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRepository = void 0;
class RoomRepository {
    constructor(searchDatasource) {
        this.searchDatasource = searchDatasource;
    }
    async searchByStayDate(checkin, checkout) {
        return this.searchDatasource.byStayDate(checkin, checkout);
    }
}
exports.RoomRepository = RoomRepository;
