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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getUsers;
const extension_1 = require("@prisma/client/extension");
const prisma = new extension_1.PrismaClient();
function getUsers(res, req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield prisma.user.findMany({});
            return users;
        }
        catch (error) {
            res.status;
        }
    });
}
