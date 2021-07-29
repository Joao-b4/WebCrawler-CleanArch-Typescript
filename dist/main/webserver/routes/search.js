"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("@/main/webserver/factories");
const adapters_1 = require("@/main/webserver/adapters");
exports.default = (router) => {
    router.post('/search', adapters_1.adaptRoute(factories_1.makeSearchByStayDateController()));
};
