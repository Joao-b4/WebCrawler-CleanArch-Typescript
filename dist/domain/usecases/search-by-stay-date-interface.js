"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByStayDate = void 0;
const search_error_1 = require("../errors/search-error");
class SearchByStayDate {
    constructor(roomRepository) {
        this.roomRepository = roomRepository;
    }
    async call(checkin, checkout) {
        if (!checkin || !checkout) {
            throw search_error_1.SearchParameterEmpty;
        }
        const roomModel = this.roomRepository.searchByStayDate(checkin, checkout);
        return roomModel;
    }
}
exports.SearchByStayDate = SearchByStayDate;
