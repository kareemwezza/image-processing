"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const resize_1 = __importDefault(require("../utils/resize"));
const errorHandler_1 = require("../middlewares/errorHandler");
const request = (0, supertest_1.default)(index_1.default);
describe('This suit is for testing our api to process images 😗', () => {
    it('Test Entry endpoint status', () => __awaiter(void 0, void 0, void 0, function* () {
        const respone = yield request.get('/');
        expect(respone.status).toBe(200);
    }));
    it('Test our Resizing Image function', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (0, resize_1.default)('fjord', '500', '500')).toBeTruthy();
    }));
    it('Test our Resizing Image function to throw an error', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, resize_1.default)('as', '500', '500');
        }
        catch (error) {
            expect(error).toBeInstanceOf(errorHandler_1.CustomeError);
        }
    }));
    it('Test our API Image when fails', () => __awaiter(void 0, void 0, void 0, function* () {
        const respone = yield request.get('/images/resize?name=unknownImage&height=800&width=500');
        expect(respone.status).toBe(501);
    }));
});
