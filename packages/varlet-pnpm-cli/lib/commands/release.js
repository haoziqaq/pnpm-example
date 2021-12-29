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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.release = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var execa_1 = __importDefault(require("execa"));
var logger_1 = __importDefault(require("../shared/logger"));
var semver_1 = __importDefault(require("semver"));
var glob_1 = __importDefault(require("glob"));
var constant_1 = require("../shared/constant");
var path_1 = require("path");
var releaseTypes = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch'
];
function isWorktreeEmpty() {
    return __awaiter(this, void 0, void 0, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execa_1.default)('git', ['status', '--porcelain'])];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, !ret.stdout];
            }
        });
    });
}
function release() {
    return __awaiter(this, void 0, void 0, function () {
        var currentVersion, name, ret, type, isPre, expectVersion, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isWorktreeEmpty()];
                case 1:
                    if (!(_a.sent())) {
                        logger_1.default.error('Git worktree is not empty, please commit changed');
                        return [2 /*return*/];
                    }
                    currentVersion = require((0, path_1.resolve)(constant_1.CWD, 'package.json')).version;
                    if (!currentVersion) {
                        logger_1.default.error('Your package is missing the version field');
                        return [2 /*return*/];
                    }
                    name = 'Please select release type';
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: name,
                                type: 'list',
                                choices: releaseTypes,
                            },
                        ])];
                case 2:
                    ret = _a.sent();
                    type = ret[name];
                    isPre = type.startsWith('pre');
                    expectVersion = semver_1.default.inc(currentVersion, type);
                    res = glob_1.default.sync('package.json');
                    console.log(res);
                    return [2 /*return*/];
            }
        });
    });
}
exports.release = release;
