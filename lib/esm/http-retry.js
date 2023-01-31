import { throwError, of } from 'rxjs';
import { retryWhen, delay, take, concatMap } from 'rxjs/operators';
export function httpRetry(maxTries = 5, delayMs = 700, retryableStatuses = [0, 500]) {
    return retryWhen(errors => errors.pipe(delay(delayMs), take(maxTries), concatMap((e, r) => retryableStatuses.includes(e.status) && (r < maxTries - 1) ? of(e) : throwError(e))));
}
