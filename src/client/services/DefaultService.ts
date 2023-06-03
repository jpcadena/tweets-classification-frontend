/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Msg } from '../models/Msg';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {
  /**
   * Welcome Message
   * Endpoint function for the base URL ('/') of the API application.
   * ## Response:
   * - `return:` **Welcome message**
   * - `rtype:` **Msg**
   * @returns Msg Successful Response
   * @throws ApiError
   */
  public static get(): CancelablePromise<Msg> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/',
    });
  }
}
