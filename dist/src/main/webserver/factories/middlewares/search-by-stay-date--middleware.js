"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearcByStayDatehMiddleware = void 0;
const middlewares_1 = require("@/presentation/http/middlewares");
const makeSearcByStayDatehMiddleware = () => {
    return new middlewares_1.SearchByStayDateMiddleware();
};
exports.makeSearcByStayDatehMiddleware = makeSearcByStayDatehMiddleware;
//# sourceMappingURL=search-by-stay-date--middleware.js.map