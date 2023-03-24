/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Response class for creating User that inherits from UserID and
 * UserBase.
 */
export type UserCreateResponse = {
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
};
