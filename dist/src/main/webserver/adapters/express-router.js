"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const request = {
            body: (req.body || {}),
            params: (req.params || {}),
            headers: (req.headers || {})
        };
        const httpResponse = await controller.handle(request);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=express-router.js.map