"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotelRoomPageFunction = void 0;
const getHotelRoomPageFunction = () => {
    document.querySelectorAll('.hotel_name').forEach(element => {
        console.log(element.textContent);
    });
    return { data: [] };
};
exports.getHotelRoomPageFunction = getHotelRoomPageFunction;
//# sourceMappingURL=get-hotel-room-evaluate.js.map