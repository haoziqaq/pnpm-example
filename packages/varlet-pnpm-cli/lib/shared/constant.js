"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JEST_STYLE_MOCK =
  exports.JEST_MEDIA_MOCK =
  exports.JEST_CONFIG =
  exports.HL_WEB_TYPES_JSON =
  exports.HL_ATTRIBUTES_JSON =
  exports.HL_TAGS_JSON =
  exports.HL_DIR =
  exports.HL_MD =
  exports.HL_TITLE_SLOTS_RE =
  exports.HL_TITLE_EVENTS_RE =
  exports.HL_TITLE_ATTRIBUTES_RE =
  exports.HL_API_RE =
  exports.HL_COMPONENT_NAME_RE =
  exports.SITE_CONFIG =
  exports.SITE_MOBILE_ROUTES =
  exports.SITE_PC_ROUTES =
  exports.SITE_DIR =
  exports.SITE_PUBLIC_PATH =
  exports.SITE_OUTPUT_PATH =
  exports.SITE =
  exports.CLI_PACKAGE_JSON =
  exports.UI_PACKAGE_JSON =
  exports.GENERATORS_DIR =
  exports.TESTS_DIR_NAME =
  exports.EXAMPLE_DIR_INDEX =
  exports.DOCS_DIR_NAME =
  exports.EXAMPLE_LOCALE_DIR_NAME =
  exports.EXAMPLE_DIR_NAME =
  exports.STYLE_DIR_NAME =
  exports.PUBLIC_DIR_INDEXES =
  exports.SCRIPTS_EXTENSIONS =
  exports.VITE_RESOLVE_EXTENSIONS =
  exports.ESLINT_EXTENSIONS =
  exports.ROOT_DOCS_DIR =
  exports.TYPES_DIR =
  exports.UMD_DIR =
  exports.LIB_DIR =
  exports.ES_DIR =
  exports.SRC_DIR =
  exports.VARLET_CONFIG =
  exports.CWD =
    void 0;
var path_1 = require("path");
exports.CWD = process.cwd();
exports.VARLET_CONFIG = (0, path_1.resolve)(exports.CWD, "varlet.config.js");
exports.SRC_DIR = (0, path_1.resolve)(exports.CWD, "src");
exports.ES_DIR = (0, path_1.resolve)(exports.CWD, "es");
exports.LIB_DIR = (0, path_1.resolve)(exports.CWD, "lib");
exports.UMD_DIR = (0, path_1.resolve)(exports.CWD, "umd");
exports.TYPES_DIR = (0, path_1.resolve)(exports.CWD, "types");
exports.ROOT_DOCS_DIR = (0, path_1.resolve)(exports.CWD, "docs");
exports.ESLINT_EXTENSIONS = [".vue", ".ts", ".js", ".mjs", ".tsx", ".jsx"];
exports.VITE_RESOLVE_EXTENSIONS = [
  ".vue",
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".less",
  ".css",
];
exports.SCRIPTS_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];
exports.PUBLIC_DIR_INDEXES = [
  "index.vue",
  "index.tsx",
  "index.ts",
  "index.jsx",
  "index.js",
];
exports.STYLE_DIR_NAME = "style";
exports.EXAMPLE_DIR_NAME = "example";
exports.EXAMPLE_LOCALE_DIR_NAME = "locale";
exports.DOCS_DIR_NAME = "docs";
exports.EXAMPLE_DIR_INDEX = "index.vue";
exports.TESTS_DIR_NAME = "__tests__";
exports.GENERATORS_DIR = (0, path_1.resolve)(__dirname, "../../generators");
exports.UI_PACKAGE_JSON = (0, path_1.resolve)(exports.CWD, "package.json");
exports.CLI_PACKAGE_JSON = (0, path_1.resolve)(__dirname, "../../package.json");
// site
exports.SITE = (0, path_1.resolve)(__dirname, "../../site");
exports.SITE_OUTPUT_PATH = (0, path_1.resolve)(exports.CWD, "site");
exports.SITE_PUBLIC_PATH = (0, path_1.resolve)(exports.CWD, "public");
exports.SITE_DIR = (0, path_1.resolve)(exports.CWD, ".varlet/site");
exports.SITE_PC_ROUTES = (0, path_1.resolve)(
  exports.CWD,
  ".varlet/pc.routes.ts"
);
exports.SITE_MOBILE_ROUTES = (0, path_1.resolve)(
  exports.CWD,
  ".varlet/mobile.routes.ts"
);
exports.SITE_CONFIG = (0, path_1.resolve)(
  exports.CWD,
  ".varlet/site.config.json"
);
// template highlight
exports.HL_COMPONENT_NAME_RE = /.*(\/|\\)(.+)(\/|\\)docs(\/|\\)/;
exports.HL_API_RE = /##\s*API\n+/;
exports.HL_TITLE_ATTRIBUTES_RE = /###\s*??????\s*\n+/;
exports.HL_TITLE_EVENTS_RE = /###\s*??????\s*\n+/;
exports.HL_TITLE_SLOTS_RE = /###\s*??????\s*\n+/;
exports.HL_MD = "zh-CN.md";
exports.HL_DIR = (0, path_1.resolve)(exports.CWD, "highlight");
exports.HL_TAGS_JSON = (0, path_1.resolve)(exports.HL_DIR, "tags.json");
exports.HL_ATTRIBUTES_JSON = (0, path_1.resolve)(
  exports.HL_DIR,
  "attributes.json"
);
exports.HL_WEB_TYPES_JSON = (0, path_1.resolve)(
  exports.HL_DIR,
  "web-types.json"
);
// jest
exports.JEST_CONFIG = (0, path_1.resolve)(
  __dirname,
  "../config/jest.config.js"
);
exports.JEST_MEDIA_MOCK = (0, path_1.resolve)(
  __dirname,
  "../config/jest.media.mock.js"
);
exports.JEST_STYLE_MOCK = (0, path_1.resolve)(
  __dirname,
  "../config/jest.style.mock.js"
);
