"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStayDate = void 0;
const adapters_1 = require("@/main/webserver/adapters");
const factories_1 = require("@/main/webserver/factories");
exports.validateStayDate = adapters_1.adaptMiddleware(factories_1.makeSearcByStayDatehMiddleware());
//# sourceMappingURL=validate-stay-date.js.map