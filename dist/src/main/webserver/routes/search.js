"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("@/main/webserver/factories/controllers");
const adapters_1 = require("@/main/webserver/adapters");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.post('/search', [middlewares_1.validateStayDate], adapters_1.adaptRoute(controllers_1.makeSearchByStayDateController()));
};
//# sourceMappingURL=search.js.map