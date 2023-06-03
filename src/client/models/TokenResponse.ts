/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Token for Response based on Pydantic Base Model.
 */
export type TokenResponse = {
  /**
   * Access token
   */
  access_token: string;
  /**
   * Type of the token
   */
  token_type: string;
  /**
   * Refresh token
   */
  refresh_token: string;
};
