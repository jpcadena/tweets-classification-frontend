/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_auth_login } from '../models/Body_auth_login';
import type { Msg } from '../models/Msg';
import type { TokenResetPassword } from '../models/TokenResetPassword';
import type { TokenResponse } from '../models/TokenResponse';
import type { UserAuth } from '../models/UserAuth';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {
  /**
   * Login
   * Endpoint to handle user login with OAuth2 authentication using
   * request form.
   * ## Parameter:
   * - `user:` **Request body with username and password**
   * - `type:` **OAuth2PasswordRequestForm**
   * ## Response:
   * - `return:` **Token information with access token, its type and
   * refresh token**
   * - `rtype:` **TokenResponse**
   * @param formData
   * @returns TokenResponse Successful Response
   * @throws ApiError
   */
  public static login(
    formData: Body_auth_login,
  ): CancelablePromise<TokenResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/auth/login',
      formData: formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Test Token
   * Endpoint to test the validity of an access token.
   * ## Response:
   * - `return:` **The authenticated user instance**
   * - `rtype:` **UserAuth**
   * @returns UserAuth Successful Response
   * @throws ApiError
   */
  public static testToken(): CancelablePromise<UserAuth> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/auth/login/test-token',
    });
  }

  /**
   * Recover Password
   * Endpoint to handle password recovery.
   * ## Parameter:
   * - `email:` **Path parameter that references the email used to recover
   * the password**
   * - `type:` **EmailStr**
   * ## Response:
   * - `return:` **Message object**
   * - `rtype:` **Msg**
   * @param email The email used to recover the password
   * @returns Msg Successful Response
   * @throws ApiError
   */
  public static recoverPassword(email: string): CancelablePromise<Msg> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/auth/password-recovery/{email}',
      path: {
        email: email,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Reset Password
   * Endpoint to handle password reset.
   * ## Parameter:
   * - `token_reset_password:` **Body Object with token and new password**
   * - `type:` **TokenResetPassword**
   * ## Response:
   * - `return:` **Message object**
   * - `rtype:` **Msg**
   * @param requestBody
   * @returns Msg Successful Response
   * @throws ApiError
   */
  public static resetPassword(
    requestBody: TokenResetPassword,
  ): CancelablePromise<Msg> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/auth/reset-password/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
