/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Analysis } from './Analysis';
import type { Gender } from './Gender';

/**
 * Schema for the response when retrieving a User.
 */
export type UserResponse = {
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
  /**
   * First name(s) of the User
   */
  first_name: string;
  /**
   * Last name(s) of the User
   */
  last_name: string;
  /**
   * Middle name(s) of the User
   */
  middle_name?: string;
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
  /**
   * Time the User was updated
   */
  updated_at?: string;
  /**
   * True if the user is active; otherwise false
   */
  is_active: boolean;
  /**
   * True if the user is super user; otherwise false
   */
  is_superuser: boolean;
  /**
   * Time the User was created
   */
  created_at?: string;
  /**
   * List of related analyses
   */
  analyses?: Array<Analysis>;
};
