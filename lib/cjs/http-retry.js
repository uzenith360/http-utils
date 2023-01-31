"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRetry = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function httpRetry(maxTries = 5, delayMs = 700, retryableStatuses = [0, 500]) {
    return (0, operators_1.retryWhen)(errors => errors.pipe((0, operators_1.delay)(delayMs), (0, operators_1.take)(maxTries), (0, operators_1.concatMap)((e, r) => retryableStatuses.includes(e.status) && (r < maxTries - 1) ? (0, rxjs_1.of)(e) : (0, rxjs_1.throwError)(e))));
}
exports.httpRetry = httpRetry;
