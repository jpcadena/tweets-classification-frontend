/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Token Reset Password for Request based on Pydantic Base Model.
 */
export type TokenResetPassword = {
  /**
   * Access token
   */
  token: string;
  /**
   * New password to reset
   */
  password: string;
};
