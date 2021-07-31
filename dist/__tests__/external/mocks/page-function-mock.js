"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFunctionMock = exports.ScrapingResultMock = void 0;
exports.ScrapingResultMock = { data: [{ name: 'Test1', description: 'Test-description', image: 'https://google.com', price: 'R$ 160.00' }] };
const PageFunctionMock = () => exports.ScrapingResultMock;
exports.PageFunctionMock = PageFunctionMock;
//# sourceMappingURL=page-function-mock.js.map