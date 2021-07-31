"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotelRoomPageFunction = void 0;
const getHotelRoomPageFunction = async (page) => {
    return await page.evaluate(() => {
        const scrapingResult = { data: [] };
        document.querySelectorAll('.roomrate:not(.d-none)').forEach(element => {
            const name = element.querySelectorAll('.hotel_name')[0].textContent.trim();
            const price = element.querySelectorAll('.price-total')[0].textContent.trim();
            const image = element.querySelectorAll('.image-step2')[0].getAttribute('src');
            const description = element.querySelectorAll('.hotel-description')[0].textContent.replace('(ver mais)', '').trim();
            const room = {
                name,
                price,
                description,
                image
            };
            scrapingResult.data.push(room);
        });
        return scrapingResult;
    });
};
exports.getHotelRoomPageFunction = getHotelRoomPageFunction;
//# sourceMappingURL=get-hotel-room-page-function.js.map