"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponentialBackoff = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function exponentialBackoff(maxTries, delay, retryableStatuses = [0, 500]) {
    return (0, rxjs_1.pipe)((0, operators_1.retryWhen)(attempts => (0, rxjs_1.zip)((0, rxjs_1.range)(1, maxTries + 1), attempts).pipe((0, operators_1.mergeMap)(([i, err]) => (i > maxTries) && !retryableStatuses.includes(err.status)
        ? (0, rxjs_1.throwError)(err)
        : (0, rxjs_1.of)(i)), (0, operators_1.map)(i => i * i), (0, operators_1.mergeMap)(v => (0, rxjs_1.timer)(v * delay)))));
}
exports.exponentialBackoff = exponentialBackoff;
