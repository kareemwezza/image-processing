"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const routes_1 = __importDefault(require("./routes"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
exports.default = app;
