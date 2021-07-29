"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
/// desacoplando abertura da porta e testar somente o app.ts
const app_1 = __importDefault(require("@/main/webserver/config/app"));
const config_1 = require("@/main/webserver/config");
app_1.default.listen(config_1.env.port, () => console.log(`Server running ${config_1.env.port}`));
