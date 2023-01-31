import 'mocha';
import { assert, expect } from 'chai';

import { HttpError, exponentialBackoff, httpRetry } from '../src/index';
import * as npmPackage from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.isObject(npmPackage);
    });

    it('should have a HttpError property', () => {
        assert.property(npmPackage, 'HttpError');
    });
});

describe('Exponential Backoff Function', () => {
    it('should be a function', () => {
        assert.isFunction(exponentialBackoff);
    });
});

describe('Http Retry Function', () => {
    it('should be a function', () => {
        assert.isFunction(httpRetry);
    });
});

describe('HttpError', () => {
  it('should create an instance', () => {
    expect(new HttpError('Not Found', 404)).instanceOf(Error);
  });
});