"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.changelog = void 0;
var ora_1 = __importDefault(require("ora"));
var conventional_changelog_1 = __importDefault(
  require("conventional-changelog")
);
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
function changelog(_a) {
  var _b = _a.releaseCount,
    releaseCount = _b === void 0 ? 0 : _b,
    _c = _a.append,
    append = _c === void 0 ? false : _c;
  var s = (0, ora_1.default)().start("Generating changelog");
  return new Promise(function (resolve) {
    (0, conventional_changelog_1.default)({
      preset: "angular",
      releaseCount: releaseCount,
      append: append,
    })
      .pipe((0, fs_extra_1.createWriteStream)(constant_1.CHANGELOG_MD))
      .on("close", function () {
        s.succeed("Changelog generated success!");
        resolve();
      });
  });
}
exports.changelog = changelog;
