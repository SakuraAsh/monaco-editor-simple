(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '--',\n        blockComment: ['--[[', ']]'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.lua',\n    keywords: [\n        'and', 'break', 'do', 'else', 'elseif',\n        'end', 'false', 'for', 'function', 'goto', 'if',\n        'in', 'local', 'nil', 'not', 'or',\n        'repeat', 'return', 'then', 'true', 'until',\n        'while'\n    ],\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' }\n    ],\n    operators: [\n        '+', '-', '*', '/', '%', '^', '#', '==', '~=', '<=', '>=', '<', '>', '=',\n        ';', ':', ',', '.', '..', '...'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // keys\n            [/(,)(\\s*)([a-zA-Z_]\\w*)(\\s*)(:)(?!:)/, ['delimiter', '', 'key', '', 'delimiter']],\n            [/({)(\\s*)([a-zA-Z_]\\w*)(\\s*)(:)(?!:)/, ['@brackets', '', 'key', '', 'delimiter']],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\n            [/\\d+?/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings: recover on non-terminated strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string.\"'],\n            [/'/, 'string', '@string.\\''],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/--\\[([=]*)\\[/, 'comment', '@comment.$1'],\n            [/--.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^\\]]+/, 'comment'],\n            [/\\]([=]*)\\]/, {\n                    cases: {\n                        '$1==$S2': { token: 'comment', next: '@pop' },\n                        '@default': 'comment'\n                    }\n                }],\n            [/./, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"']+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/[\"']/, {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }]\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js?");

/***/ })

}]);