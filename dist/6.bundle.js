(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(#?-?\\d*\\.\\d\\w*%?)|([@$#!.:]?[\\w-?]+%?)|[@#!.]/g,\n    comments: {\n        blockComment: ['/*', '*/'],\n        lineComment: '//'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#region\\\\b\\\\s*(.*?)\\\\s*\\\\*\\\\/\"),\n            end: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#endregion\\\\b.*\\\\*\\\\/\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.scss',\n    ws: '[ \\t\\n\\r\\f]*',\n    identifier: '-?-?([a-zA-Z]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@selector' },\n        ],\n        selector: [\n            { include: '@comments' },\n            { include: '@import' },\n            { include: '@variabledeclaration' },\n            { include: '@warndebug' },\n            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],\n            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],\n            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],\n            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],\n            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],\n            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],\n            ['url(\\\\-prefix)?\\\\(', { token: 'meta', next: '@urldeclaration' }],\n            { include: '@controlstatement' },\n            { include: '@selectorname' },\n            ['[&\\\\*]', 'tag'],\n            ['[>\\\\+,]', 'delimiter'],\n            ['\\\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],\n            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],\n        ],\n        selectorbody: [\n            ['[*_]?@identifier@ws:(?=(\\\\s|\\\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],\n            { include: '@selector' },\n            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],\n            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        selectorname: [\n            ['#{', { token: 'meta', next: '@variableinterpolation' }],\n            ['(\\\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],\n        ],\n        selectorattribute: [\n            { include: '@term' },\n            [']', { token: 'delimiter.bracket', next: '@pop' }],\n        ],\n        term: [\n            { include: '@comments' },\n            ['url(\\\\-prefix)?\\\\(', { token: 'meta', next: '@urldeclaration' }],\n            { include: '@functioninvocation' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@variablereference' },\n            ['(and\\\\b|or\\\\b|not\\\\b)', 'operator'],\n            { include: '@name' },\n            ['([<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,])', 'operator'],\n            [',', 'delimiter'],\n            ['!default', 'literal'],\n            ['\\\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }],\n        ],\n        rulevalue: [\n            { include: '@term' },\n            ['!important', 'literal'],\n            [';', 'delimiter', '@pop'],\n            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        nestedproperty: [\n            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],\n            { include: '@comments' },\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        warndebug: [\n            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }],\n        ],\n        import: [\n            ['[@](import)', { token: 'keyword', next: '@declarationbody' }],\n        ],\n        variabledeclaration: [\n            ['\\\\$@identifier@ws:', 'variable.decl', '@declarationbody'],\n        ],\n        urldeclaration: [\n            { include: '@strings' },\n            ['[^)\\r\\n]+', 'string'],\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        parenthizedterm: [\n            { include: '@term' },\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }],\n        ],\n        declarationbody: [\n            { include: '@term' },\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        extendbody: [\n            { include: '@selectorname' },\n            ['!optional', 'literal'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        variablereference: [\n            ['\\\\$@identifier', 'variable.ref'],\n            ['\\\\.\\\\.\\\\.', 'operator'],\n            ['#{', { token: 'meta', next: '@variableinterpolation' }],\n        ],\n        variableinterpolation: [\n            { include: '@variablereference' },\n            ['}', { token: 'meta', next: '@pop' }],\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment'],\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            ['.', 'comment'],\n        ],\n        name: [\n            ['@identifier', 'attribute.value'],\n        ],\n        numbers: [\n            ['(\\\\d*\\\\.)?\\\\d+([eE][\\\\-+]?\\\\d+)?', { token: 'number', next: '@units' }],\n            ['#[0-9a-fA-F_]+(?!\\\\w)', 'number.hex'],\n        ],\n        units: [\n            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'number', '@pop']\n        ],\n        functiondeclaration: [\n            ['@identifier@ws\\\\(', { token: 'meta', next: '@parameterdeclaration' }],\n            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }],\n        ],\n        mixindeclaration: [\n            // mixin with parameters\n            ['@identifier@ws\\\\(', { token: 'meta', next: '@parameterdeclaration' }],\n            // mixin without parameters\n            ['@identifier', 'meta'],\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        parameterdeclaration: [\n            ['\\\\$@identifier@ws:', 'variable.decl'],\n            ['\\\\.\\\\.\\\\.', 'operator'],\n            [',', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        includedeclaration: [\n            { include: '@functioninvocation' },\n            ['@identifier', 'meta'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        keyframedeclaration: [\n            ['@identifier', 'meta'],\n            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }],\n        ],\n        keyframebody: [\n            { include: '@term' },\n            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        controlstatement: [\n            ['[@](if|else|for|while|each|media)', { token: 'keyword.flow', next: '@controlstatementdeclaration' }],\n        ],\n        controlstatementdeclaration: [\n            ['(in|from|through|if|to)\\\\b', { token: 'keyword.flow' }],\n            { include: '@term' },\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        functionbody: [\n            ['[@](return)', { token: 'keyword' }],\n            { include: '@variabledeclaration' },\n            { include: '@term' },\n            { include: '@controlstatement' },\n            [';', 'delimiter'],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        functioninvocation: [\n            ['@identifier\\\\(', { token: 'meta', next: '@functionarguments' }],\n        ],\n        functionarguments: [\n            ['\\\\$@identifier@ws:', 'attribute.name'],\n            ['[,]', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        strings: [\n            ['~?\"', { token: 'string.delimiter', next: '@stringenddoublequote' }],\n            ['~?\\'', { token: 'string.delimiter', next: '@stringendquote' }]\n        ],\n        stringenddoublequote: [\n            ['\\\\\\\\.', 'string'],\n            ['\"', { token: 'string.delimiter', next: '@pop' }],\n            ['.', 'string']\n        ],\n        stringendquote: [\n            ['\\\\\\\\.', 'string'],\n            ['\\'', { token: 'string.delimiter', next: '@pop' }],\n            ['.', 'string']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js?");

/***/ })

}]);