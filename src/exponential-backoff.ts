import { of, pipe, range, throwError, timer, zip } from 'rxjs';
import { map, mergeMap, retryWhen } from 'rxjs/operators';

export function exponentialBackoff(maxTries: number, delay: number, retryableStatuses: number[] = [0, 500, 502]) {
    return pipe(
      retryWhen(attempts =>
        zip(range(1, maxTries + 1), attempts).pipe(
          mergeMap(([i, err]) => (i > maxTries) && !retryableStatuses.includes(err.status) 
          ? throwError(err) 
          : of(i)),
          map(i => i * i),
          mergeMap(v => timer(v * delay)),
        ),
      ),
    );
  }