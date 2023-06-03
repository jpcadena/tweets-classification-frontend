/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User Auth that inherits from UserID.
 */
export type UserAuth = {
  /**
   * ID of the User
   */
  id: number;
  /**
   * Username to identify the user
   */
  username: string;
  /**
   * Preferred e-mail address of the User
   */
  email: string;
};
