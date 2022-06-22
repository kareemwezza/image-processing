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
const sharp_1 = __importDefault(require("sharp"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const errorHandler_1 = require("../middlewares/errorHandler");
exports.default = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const thumbpath = path_1.default.join(process.cwd(), 'images', 'thumbnails', `${imageName}_${width}_${height}.jpg`);
    const imagePath = path_1.default.join(process.cwd(), 'images', `${imageName}.jpg`);
    const exists = yield fs_extra_1.default.pathExists(imagePath);
    if (exists) {
        const cached = yield fs_extra_1.default.pathExists(thumbpath);
        if (cached) {
            return thumbpath;
        }
        yield (0, sharp_1.default)(imagePath)
            .resize({ width: parseInt(width), height: parseInt(height) })
            .toFile(thumbpath);
        return thumbpath;
    }
    else {
        throw new errorHandler_1.CustomeError('Sorry🙃! No Such Image Name Found In Our Records.');
    }
});
