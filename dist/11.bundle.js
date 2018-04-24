(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.redis',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        \"APPEND\", \"AUTH\", \"BGREWRITEAOF\", \"BGSAVE\", \"BITCOUNT\", \"BITFIELD\", \"BITOP\", \"BITPOS\", \"BLPOP\", \"BRPOP\", \"BRPOPLPUSH\",\n        \"CLIENT\", \"KILL\", \"LIST\", \"GETNAME\", \"PAUSE\", \"REPLY\", \"SETNAME\", \"CLUSTER\", \"ADDSLOTS\", \"COUNT-FAILURE-REPORTS\",\n        \"COUNTKEYSINSLOT\", \"DELSLOTS\", \"FAILOVER\", \"FORGET\", \"GETKEYSINSLOT\", \"INFO\", \"KEYSLOT\", \"MEET\", \"NODES\", \"REPLICATE\",\n        \"RESET\", \"SAVECONFIG\", \"SET-CONFIG-EPOCH\", \"SETSLOT\", \"SLAVES\", \"SLOTS\", \"COMMAND\", \"COUNT\", \"GETKEYS\", \"CONFIG\", \"GET\",\n        \"REWRITE\", \"SET\", \"RESETSTAT\", \"DBSIZE\", \"DEBUG\", \"OBJECT\", \"SEGFAULT\", \"DECR\", \"DECRBY\", \"DEL\", \"DISCARD\", \"DUMP\", \"ECHO\",\n        \"EVAL\", \"EVALSHA\", \"EXEC\", \"EXISTS\", \"EXPIRE\", \"EXPIREAT\", \"FLUSHALL\", \"FLUSHDB\", \"GEOADD\", \"GEOHASH\", \"GEOPOS\", \"GEODIST\",\n        \"GEORADIUS\", \"GEORADIUSBYMEMBER\", \"GETBIT\", \"GETRANGE\", \"GETSET\", \"HDEL\", \"HEXISTS\", \"HGET\", \"HGETALL\", \"HINCRBY\", \"HINCRBYFLOAT\",\n        \"HKEYS\", \"HLEN\", \"HMGET\", \"HMSET\", \"HSET\", \"HSETNX\", \"HSTRLEN\", \"HVALS\", \"INCR\", \"INCRBY\", \"INCRBYFLOAT\", \"KEYS\", \"LASTSAVE\",\n        \"LINDEX\", \"LINSERT\", \"LLEN\", \"LPOP\", \"LPUSH\", \"LPUSHX\", \"LRANGE\", \"LREM\", \"LSET\", \"LTRIM\", \"MGET\", \"MIGRATE\", \"MONITOR\",\n        \"MOVE\", \"MSET\", \"MSETNX\", \"MULTI\", \"PERSIST\", \"PEXPIRE\", \"PEXPIREAT\", \"PFADD\", \"PFCOUNT\", \"PFMERGE\", \"PING\", \"PSETEX\",\n        \"PSUBSCRIBE\", \"PUBSUB\", \"PTTL\", \"PUBLISH\", \"PUNSUBSCRIBE\", \"QUIT\", \"RANDOMKEY\", \"READONLY\", \"READWRITE\", \"RENAME\", \"RENAMENX\",\n        \"RESTORE\", \"ROLE\", \"RPOP\", \"RPOPLPUSH\", \"RPUSH\", \"RPUSHX\", \"SADD\", \"SAVE\", \"SCARD\", \"SCRIPT\", \"FLUSH\", \"LOAD\", \"SDIFF\",\n        \"SDIFFSTORE\", \"SELECT\", \"SETBIT\", \"SETEX\", \"SETNX\", \"SETRANGE\", \"SHUTDOWN\", \"SINTER\", \"SINTERSTORE\", \"SISMEMBER\", \"SLAVEOF\",\n        \"SLOWLOG\", \"SMEMBERS\", \"SMOVE\", \"SORT\", \"SPOP\", \"SRANDMEMBER\", \"SREM\", \"STRLEN\", \"SUBSCRIBE\", \"SUNION\", \"SUNIONSTORE\", \"SWAPDB\",\n        \"SYNC\", \"TIME\", \"TOUCH\", \"TTL\", \"TYPE\", \"UNSUBSCRIBE\", \"UNLINK\", \"UNWATCH\", \"WAIT\", \"WATCH\", \"ZADD\", \"ZCARD\", \"ZCOUNT\", \"ZINCRBY\",\n        \"ZINTERSTORE\", \"ZLEXCOUNT\", \"ZRANGE\", \"ZRANGEBYLEX\", \"ZREVRANGEBYLEX\", \"ZRANGEBYSCORE\", \"ZRANK\", \"ZREM\", \"ZREMRANGEBYLEX\",\n        \"ZREMRANGEBYRANK\", \"ZREMRANGEBYSCORE\", \"ZREVRANGE\", \"ZREVRANGEBYSCORE\", \"ZREVRANK\", \"ZSCORE\", \"ZUNIONSTORE\", \"SCAN\", \"SSCAN\",\n        \"HSCAN\", \"ZSCAN\"\n    ],\n    operators: [],\n    builtinFunctions: [],\n    builtinVariables: [],\n    pseudoColumns: [],\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@pseudoColumns' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/[\\w@#$]+/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        pseudoColumns: [\n            [/[$][A-Za-z_][\\w@#$]*/, {\n                    cases: {\n                        '@pseudoColumns': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/'/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string.double', next: '@stringDouble' }]\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }],\n        ],\n        stringDouble: [\n            [/[^\"]+/, 'string.double'],\n            [/\"\"/, 'string.double'],\n            [/\"/, { token: 'string.double', next: '@pop' }]\n        ],\n        scopes: []\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js?");

/***/ })

}]);