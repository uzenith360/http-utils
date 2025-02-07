

import { throwError, of, retryWhen, delay, take, concatMap } from 'rxjs';

export function httpRetry(
  maxTries: number = 5,
  delayMs: number = 700,
  retryableStatuses: number[] = [0, 500, 502, 503, 504],
): any {
  return retryWhen(
    errors =>
      errors.pipe(
        delay(delayMs),
        take(maxTries),
        concatMap(
          (e, r) =>
            retryableStatuses.includes(e.status) && (r < maxTries - 1) ? of(e) : throwError(e),
        )
      ),
  );
}
