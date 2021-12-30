"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitLint = void 0;
var logger_1 = __importDefault(require("../shared/logger"));
function commitLint(gitParams) {
  var message = require("fs").readFileSync(gitParams, "utf-8").trim();
  var COMMIT_MESSAGE_RE =
    /^(revert|fix|feat|docs|perf|test|types|style|build|chore|release|refactor)(\(.+\))?: (.|\n)+/;
  if (!COMMIT_MESSAGE_RE.test(message)) {
    logger_1.default.error("Commit message invalid");
    logger_1.default.warning(
      "The rules for commit messages are as follows\n\nExample:\n\nfeat: added a new feature\nfeat(ui/button): added a new feature in the ui/button scope\n\nfix: fixed a bug\nfix(ui/button): fixed a bug in the ui/button scope\n\ndocs: fixed an error in the documentation\ndocs(ui/button): fixed a documentation error in the ui/button scope\n\nAllowed types:\n- fix\n- feat\n- docs\n- perf\n- test\n- types\n- style\n- build\n- chore\n- release\n- refactor\n\nCommit message reference: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y\n\u53C2\u8003\u962E\u4E00\u5CF0Commit message\u7F16\u5199\u6307\u5357: https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html"
    );
    process.exit(1);
  }
}
exports.commitLint = commitLint;