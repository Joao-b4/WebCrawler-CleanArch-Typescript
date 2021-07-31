"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDatasourceMock = void 0;
class SearchDatasourceMock {
    constructor() {
        this.result = [{ name: 'Test1', description: 'Test-description', image: 'https://google.com', price: 'R$ 160.00' }];
    }
    async search({ check, chekout }) {
        return this.result;
    }
}
exports.SearchDatasourceMock = SearchDatasourceMock;
//# sourceMappingURL=crawler-search-datasource-mock.js.map