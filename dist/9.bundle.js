(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '#',\n        blockComment: ['=begin', '=end'],\n    },\n    brackets: [\n        ['(', ')'],\n        ['{', '}'],\n        ['[', ']']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\n/*\n * Ruby language definition\n *\n * Quite a complex language due to elaborate escape sequences\n * and quoting of literate strings/regular expressions, and\n * an 'end' keyword that does not always apply to modifiers like until and while,\n * and a 'do' keyword that sometimes starts a block, but sometimes is part of\n * another statement (like 'while').\n *\n * (1) end blocks:\n * 'end' may end declarations like if or until, but sometimes 'if' or 'until'\n * are modifiers where there is no 'end'. Also, 'do' sometimes starts a block\n * that is ended by 'end', but sometimes it is part of a 'while', 'for', or 'until'\n * To do proper brace matching we do some elaborate state manipulation.\n * some examples:\n *\n *   until bla do\n *     work until tired\n *     list.each do\n *       something if test\n *     end\n *   end\n *\n * or\n *\n * if test\n *  something (if test then x end)\n *  bar if bla\n * end\n *\n * or, how about using class as a property..\n *\n * class Test\n *   def endpoint\n *     self.class.endpoint || routes\n *   end\n * end\n *\n * (2) quoting:\n * there are many kinds of strings and escape sequences. But also, one can\n * start many string-like things as '%qx' where q specifies the kind of string\n * (like a command, escape expanded, regular expression, symbol etc.), and x is\n * some character and only another 'x' ends the sequence. Except for brackets\n * where the closing bracket ends the sequence.. and except for a nested bracket\n * inside the string like entity. Also, such strings can contain interpolated\n * ruby expressions again (and span multiple lines). Moreover, expanded\n * regular expression can also contain comments.\n */\nvar language = {\n    tokenPostfix: '.ruby',\n    keywords: [\n        '__LINE__', '__ENCODING__', '__FILE__', 'BEGIN', 'END', 'alias', 'and', 'begin',\n        'break', 'case', 'class', 'def', 'defined?', 'do', 'else', 'elsif', 'end',\n        'ensure', 'for', 'false', 'if', 'in', 'module', 'next', 'nil', 'not', 'or', 'redo',\n        'rescue', 'retry', 'return', 'self', 'super', 'then', 'true', 'undef', 'unless',\n        'until', 'when', 'while', 'yield',\n    ],\n    keywordops: [\n        '::', '..', '...', '?', ':', '=>'\n    ],\n    builtins: [\n        'require', 'public', 'private', 'include', 'extend', 'attr_reader',\n        'protected', 'private_class_method', 'protected_class_method', 'new'\n    ],\n    // these are closed by 'end' (if, while and until are handled separately)\n    declarations: [\n        'module', 'class', 'def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'\n    ],\n    linedecls: [\n        'def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'\n    ],\n    operators: [\n        '^', '&', '|', '<=>', '==', '===', '!~', '=~', '>', '>=', '<', '<=', '<<', '>>', '+',\n        '-', '*', '/', '%', '**', '~', '+@', '-@', '[]', '[]=', '`',\n        '+=', '-=', '*=', '**=', '/=', '^=', '%=', '<<=', '>>=', '&=', '&&=', '||=', '|='\n    ],\n    brackets: [\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' }\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%\\.]+/,\n    // escape sequences\n    escape: /(?:[abefnrstv\\\\\"'\\n\\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,\n    escapes: /\\\\(?:C\\-(@escape|.)|c(@escape|.)|@escape)/,\n    decpart: /\\d(_?\\d)*/,\n    decimal: /0|@decpart/,\n    delim: /[^a-zA-Z0-9\\s\\n\\r]/,\n    heredelim: /(?:\\w+|'[^']*'|\"[^\"]*\"|`[^`]*`)/,\n    regexpctl: /[(){}\\[\\]\\$\\^|\\-*+?\\.]/,\n    regexpesc: /\\\\(?:[AzZbBdDfnrstvwWn0\\\\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        // Main entry.\n        // root.<decl> where decl is the current opening declaration (like 'class')\n        root: [\n            // identifiers and keywords\n            // most complexity here is due to matching 'end' correctly with declarations.\n            // We distinguish a declaration that comes first on a line, versus declarations further on a line (which are most likey modifiers)\n            [/^(\\s*)([a-z_]\\w*[!?=]?)/, ['white',\n                    {\n                        cases: {\n                            'for|until|while': { token: 'keyword.$2', next: '@dodecl.$2' },\n                            '@declarations': { token: 'keyword.$2', next: '@root.$2' },\n                            'end': { token: 'keyword.$S2', next: '@pop' },\n                            '@keywords': 'keyword',\n                            '@builtins': 'predefined',\n                            '@default': 'identifier'\n                        }\n                    }]],\n            [/[a-z_]\\w*[!?=]?/,\n                {\n                    cases: {\n                        'if|unless|while|until': { token: 'keyword.$0x', next: '@modifier.$0x' },\n                        'for': { token: 'keyword.$2', next: '@dodecl.$2' },\n                        '@linedecls': { token: 'keyword.$0', next: '@root.$0' },\n                        'end': { token: 'keyword.$S2', next: '@pop' },\n                        '@keywords': 'keyword',\n                        '@builtins': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[A-Z][\\w]*[!?=]?/, 'constructor.identifier'],\n            [/\\$[\\w]*/, 'global.constant'],\n            [/@[\\w]*/, 'namespace.instance.identifier'],\n            [/@@[\\w]*/, 'namespace.class.identifier'],\n            // here document\n            [/<<[-~](@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],\n            [/[ \\t\\r\\n]+<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],\n            [/^<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],\n            // whitespace\n            { include: '@whitespace' },\n            // strings\n            [/\"/, { token: 'string.d.delim', next: '@dstring.d.\"' }],\n            [/'/, { token: 'string.sq.delim', next: '@sstring.sq' }],\n            // % literals. For efficiency, rematch in the 'pstring' state\n            [/%([rsqxwW]|Q?)/, { token: '@rematch', next: 'pstring' }],\n            // commands and symbols\n            [/`/, { token: 'string.x.delim', next: '@dstring.x.`' }],\n            [/:(\\w|[$@])\\w*[!?=]?/, 'string.s'],\n            [/:\"/, { token: 'string.s.delim', next: '@dstring.s.\"' }],\n            [/:'/, { token: 'string.s.delim', next: '@sstring.s' }],\n            // regular expressions. Lookahead for a (not escaped) closing forwardslash on the same line\n            [/\\/(?=(\\\\\\/|[^\\/\\n])+\\/)/, { token: 'regexp.delim', next: '@regexp' }],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@keywordops': 'keyword',\n                        '@operators': 'operator',\n                        '@default': ''\n                    }\n                }],\n            [/[;,]/, 'delimiter'],\n            // numbers\n            [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'],\n            [/0[_oO][0-7](_?[0-7])*/, 'number.octal'],\n            [/0[bB][01](_?[01])*/, 'number.binary'],\n            [/0[dD]@decpart/, 'number'],\n            [/@decimal((\\.@decpart)?([eE][\\-+]?@decpart)?)/, {\n                    cases: {\n                        '$1': 'number.float',\n                        '@default': 'number'\n                    }\n                }],\n        ],\n        // used to not treat a 'do' as a block opener if it occurs on the same\n        // line as a 'do' statement: 'while|until|for'\n        // dodecl.<decl> where decl is the declarations started, like 'while'\n        dodecl: [\n            [/^/, { token: '', switchTo: '@root.$S2' }],\n            [/[a-z_]\\w*[!?=]?/, {\n                    cases: {\n                        'end': { token: 'keyword.$S2', next: '@pop' },\n                        'do': { token: 'keyword', switchTo: '@root.$S2' },\n                        '@linedecls': { token: '@rematch', switchTo: '@root.$S2' },\n                        '@keywords': 'keyword',\n                        '@builtins': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            { include: '@root' }\n        ],\n        // used to prevent potential modifiers ('if|until|while|unless') to match\n        // with 'end' keywords.\n        // modifier.<decl>x where decl is the declaration starter, like 'if'\n        modifier: [\n            [/^/, '', '@pop'],\n            [/[a-z_]\\w*[!?=]?/, {\n                    cases: {\n                        'end': { token: 'keyword.$S2', next: '@pop' },\n                        'then|else|elsif|do': { token: 'keyword', switchTo: '@root.$S2' },\n                        '@linedecls': { token: '@rematch', switchTo: '@root.$S2' },\n                        '@keywords': 'keyword',\n                        '@builtins': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            { include: '@root' }\n        ],\n        // single quote strings (also used for symbols)\n        // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)\n        sstring: [\n            [/[^\\\\']+/, 'string.$S2'],\n            [/\\\\\\\\|\\\\'|\\\\$/, 'string.$S2.escape'],\n            [/\\\\./, 'string.$S2.invalid'],\n            [/'/, { token: 'string.$S2.delim', next: '@pop' }]\n        ],\n        // double quoted \"string\".\n        // dstring.<kind>.<delim> where kind is 'd' (double quoted), 'x' (command), or 's' (symbol)\n        // and delim is the ending delimiter (\" or `)\n        dstring: [\n            [/[^\\\\`\"#]+/, 'string.$S2'],\n            [/#/, 'string.$S2.escape', '@interpolated'],\n            [/\\\\$/, 'string.$S2.escape'],\n            [/@escapes/, 'string.$S2.escape'],\n            [/\\\\./, 'string.$S2.escape.invalid'],\n            [/[`\"]/, {\n                    cases: {\n                        '$#==$S3': { token: 'string.$S2.delim', next: '@pop' },\n                        '@default': 'string.$S2'\n                    }\n                }]\n        ],\n        // literal documents\n        // heredoc.<close> where close is the closing delimiter\n        heredoc: [\n            [/^(\\s*)(@heredelim)$/, {\n                    cases: {\n                        '$2==$S2': ['string.heredoc', { token: 'string.heredoc.delimiter', next: '@pop' }],\n                        '@default': ['string.heredoc', 'string.heredoc']\n                    }\n                }],\n            [/.*/, 'string.heredoc'],\n        ],\n        // interpolated sequence\n        interpolated: [\n            [/\\$\\w*/, 'global.constant', '@pop'],\n            [/@\\w*/, 'namespace.class.identifier', '@pop'],\n            [/@@\\w*/, 'namespace.instance.identifier', '@pop'],\n            [/[{]/, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],\n            ['', '', '@pop'],\n        ],\n        // any code\n        interpolated_compound: [\n            [/[}]/, { token: 'string.escape.curly', next: '@pop' }],\n            { include: '@root' },\n        ],\n        // %r quoted regexp\n        // pregexp.<open>.<close> where open/close are the open/close delimiter\n        pregexp: [\n            { include: '@whitespace' },\n            // turns out that you can quote using regex control characters, aargh!\n            // for example; %r|kgjgaj| is ok (even though | is used for alternation)\n            // so, we need to match those first\n            [/[^\\(\\{\\[\\\\]/, {\n                    cases: {\n                        '$#==$S3': { token: 'regexp.delim', next: '@pop' },\n                        '$#==$S2': { token: 'regexp.delim', next: '@push' },\n                        '~[)}\\\\]]': '@brackets.regexp.escape.control',\n                        '~@regexpctl': 'regexp.escape.control',\n                        '@default': 'regexp'\n                    }\n                }],\n            { include: '@regexcontrol' },\n        ],\n        // We match regular expression quite precisely\n        regexp: [\n            { include: '@regexcontrol' },\n            [/[^\\\\\\/]/, 'regexp'],\n            ['/[ixmp]*', { token: 'regexp.delim' }, '@pop'],\n        ],\n        regexcontrol: [\n            [/(\\{)(\\d+(?:,\\d*)?)(\\})/, ['@brackets.regexp.escape.control', 'regexp.escape.control', '@brackets.regexp.escape.control']],\n            [/(\\[)(\\^?)/, ['@brackets.regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],\n            [/(\\()(\\?[:=!])/, ['@brackets.regexp.escape.control', 'regexp.escape.control']],\n            [/\\(\\?#/, { token: 'regexp.escape.control', next: '@regexpcomment' }],\n            [/[()]/, '@brackets.regexp.escape.control'],\n            [/@regexpctl/, 'regexp.escape.control'],\n            [/\\\\$/, 'regexp.escape'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/\\\\\\./, 'regexp.invalid'],\n            [/#/, 'regexp.escape', '@interpolated'],\n        ],\n        regexrange: [\n            [/-/, 'regexp.escape.control'],\n            [/\\^/, 'regexp.invalid'],\n            [/\\\\$/, 'regexp.escape'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/[^\\]]/, 'regexp'],\n            [/\\]/, '@brackets.regexp.escape.control', '@pop'],\n        ],\n        regexpcomment: [\n            [/[^)]+/, 'comment'],\n            [/\\)/, { token: 'regexp.escape.control', next: '@pop' }]\n        ],\n        // % quoted strings\n        // A bit repetitive since we need to often special case the kind of ending delimiter\n        pstring: [\n            [/%([qws])\\(/, { token: 'string.$1.delim', switchTo: '@qstring.$1.(.)' }],\n            [/%([qws])\\[/, { token: 'string.$1.delim', switchTo: '@qstring.$1.[.]' }],\n            [/%([qws])\\{/, { token: 'string.$1.delim', switchTo: '@qstring.$1.{.}' }],\n            [/%([qws])</, { token: 'string.$1.delim', switchTo: '@qstring.$1.<.>' }],\n            [/%([qws])(@delim)/, { token: 'string.$1.delim', switchTo: '@qstring.$1.$2.$2' }],\n            [/%r\\(/, { token: 'regexp.delim', switchTo: '@pregexp.(.)' }],\n            [/%r\\[/, { token: 'regexp.delim', switchTo: '@pregexp.[.]' }],\n            [/%r\\{/, { token: 'regexp.delim', switchTo: '@pregexp.{.}' }],\n            [/%r</, { token: 'regexp.delim', switchTo: '@pregexp.<.>' }],\n            [/%r(@delim)/, { token: 'regexp.delim', switchTo: '@pregexp.$1.$1' }],\n            [/%(x|W|Q?)\\(/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.(.)' }],\n            [/%(x|W|Q?)\\[/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.[.]' }],\n            [/%(x|W|Q?)\\{/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.{.}' }],\n            [/%(x|W|Q?)</, { token: 'string.$1.delim', switchTo: '@qqstring.$1.<.>' }],\n            [/%(x|W|Q?)(@delim)/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.$2.$2' }],\n            [/%([rqwsxW]|Q?)./, { token: 'invalid', next: '@pop' }],\n            [/./, { token: 'invalid', next: '@pop' }],\n        ],\n        // non-expanded quoted string.\n        // qstring.<kind>.<open>.<close>\n        //  kind = q|w|s  (single quote, array, symbol)\n        //  open = open delimiter\n        //  close = close delimiter\n        qstring: [\n            [/\\\\$/, 'string.$S2.escape'],\n            [/\\\\./, 'string.$S2.escape'],\n            [/./, {\n                    cases: {\n                        '$#==$S4': { token: 'string.$S2.delim', next: '@pop' },\n                        '$#==$S3': { token: 'string.$S2.delim', next: '@push' },\n                        '@default': 'string.$S2'\n                    }\n                }],\n        ],\n        // expanded quoted string.\n        // qqstring.<kind>.<open>.<close>\n        //  kind = Q|W|x  (double quote, array, command)\n        //  open = open delimiter\n        //  close = close delimiter\n        qqstring: [\n            [/#/, 'string.$S2.escape', '@interpolated'],\n            { include: '@qstring' }\n        ],\n        // whitespace & comments\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/^\\s*=begin\\b/, 'comment', '@comment'],\n            [/#.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^=]+/, 'comment'],\n            [/^\\s*=begin\\b/, 'comment.invalid'],\n            [/^\\s*=end\\b.*/, 'comment', '@pop'],\n            [/[=]/, 'comment']\n        ],\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js?");

/***/ })

}]);