"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        console.log(req.body);
        const httpRequest = { body: req.body, params: req.params };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.data);
    };
};
exports.adaptRoute = adaptRoute;
