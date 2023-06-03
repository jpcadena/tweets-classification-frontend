/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Gender } from './Gender';

/**
 * Schema for updating a User record.
 */
export type UserUpdate = {
  /**
   * Username to identify the user
   */
  username?: string;
  /**
   * Preferred e-mail address of the User
   */
  email?: string;
  /**
   * First name(s) of the User
   */
  first_name?: string;
  /**
   * Middle name(s) of the User
   */
  middle_name?: string;
  /**
   * Last name(s) of the User
   */
  last_name?: string;
  /**
   * New Password of the User
   */
  password?: string;
  /**
   * Gender of the User
   */
  gender?: Gender;
  /**
   * Birthday of the User
   */
  birthdate?: string;
  /**
   * Preferred telephone number of the User
   */
  phone_number?: string;
  /**
   * City for address of the User
   */
  city?: string;
  /**
   * Country for address of the User
   */
  country?: string;
};
