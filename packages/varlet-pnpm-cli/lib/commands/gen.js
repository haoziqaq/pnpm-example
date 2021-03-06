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
exports.gen = void 0;
var logger_1 = __importDefault(require("../shared/logger"));
var inquirer_1 = __importDefault(require("inquirer"));
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
function removeFiles(dest) {
    var files = ['es', 'lib', 'umd', 'highlight', 'types/index.d.ts', '.varlet', 'node_modules'];
    files.forEach(function (filename) { return (0, fs_extra_1.removeSync)((0, path_1.resolve)(dest, filename)); });
}
function syncVersion(name) {
    var file = (0, path_1.resolve)(constant_1.CWD, name, 'package.json');
    var pkg = JSON.parse((0, fs_extra_1.readFileSync)(file, 'utf-8'));
    var cliPkg = JSON.parse((0, fs_extra_1.readFileSync)(constant_1.CLI_PACKAGE_JSON, 'utf-8'));
    pkg.devDependencies['@varlet/cli'] = "^".concat(cliPkg.version);
    pkg.files = ['es', 'lib', 'umd', 'highlight', 'types', 'README.md'];
    (0, fs_extra_1.writeFileSync)(file, JSON.stringify(pkg, null, 2));
}
function gen(name) {
    return __awaiter(this, void 0, void 0, function () {
        var dest, ret, choice, generator, base;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dest = (0, path_1.resolve)(constant_1.CWD, name);
                    if ((0, fs_extra_1.pathExistsSync)(dest)) {
                        logger_1.default.warning("".concat(name, " already exists and cannot be recreated..."));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: 'Please select your component library programming style',
                                type: 'list',
                                choices: ['sfc', 'tsx'],
                            },
                        ])];
                case 1:
                    ret = _a.sent();
                    choice = ret['Please select your component library programming style'];
                    generator = (0, path_1.resolve)(constant_1.GENERATORS_DIR, choice);
                    base = (0, path_1.resolve)(constant_1.GENERATORS_DIR, 'base');
                    return [4 /*yield*/, (0, fs_extra_1.copy)(base, dest)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, fs_extra_1.copy)(generator, dest)];
                case 3:
                    _a.sent();
                    removeFiles(dest);
                    syncVersion(name);
                    logger_1.default.success('Application generated successfully!');
                    logger_1.default.info("  cd ".concat(name, "\n  yarn\n  yarn dev"));
                    logger_1.default.success("=======================\n  Good luck have fun\n=======================      ");
                    return [2 /*return*/];
            }
        });
    });
}
exports.gen = gen;
