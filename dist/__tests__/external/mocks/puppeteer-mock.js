"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stubElementHandle = exports.stubPuppeteer = exports.stubBrowser = exports.stubPage = void 0;
exports.stubPage = {
    async goto(url) {
        return Promise.resolve();
    },
    async $$(selector) {
        return Promise.resolve([]);
    },
    async $(selector) {
        return Promise.resolve();
    },
    async $eval(selector, pageFunction) {
        return Promise.resolve();
    },
    async evaluate(fn) {
        return Promise.resolve(fn());
    }
};
exports.stubBrowser = {
    async newPage() {
        return Promise.resolve(exports.stubPage);
    },
    async close() {
        return Promise.resolve();
    }
};
exports.stubPuppeteer = {
    async launch() {
        return Promise.resolve(exports.stubBrowser);
    }
};
exports.stubElementHandle = {
    async $eval() {
        console.log('stub element handle');
        return Promise.resolve();
    }
};
//# sourceMappingURL=puppeteer-mock.js.map