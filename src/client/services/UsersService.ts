/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreate } from '../models/UserCreate';
import type { UserCreateResponse } from '../models/UserCreateResponse';
import type { UserResponse } from '../models/UserResponse';
import type { UserUpdate } from '../models/UserUpdate';
import type { UserUpdateResponse } from '../models/UserUpdateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {
  /**
   * Get Users
   * Retrieve all users' basic information from the system using
   * pagination.
   * - `:param skip:` **Offset from where to start returning users**
   * - `:type skip:` **NonNegativeInt**
   * - `:param limit:` **Limit the number of results from query**
   * - `:type limit:` **PositiveInt**
   * - `:return:` **List of Users retrieved from database with id, username,
   * email, first_name, last_name, middle_name, gender, birthdate,
   * phone_number, city, country, is_active, is_superuser, created_at,
   * updated_at and analyses relationship.**
   * - `:rtype:` **list[UserResponse]**
   * @param skip Skip users
   * @param limit Limit pagination
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  public static getUsers(
    skip?: number,
    limit: number = 100,
  ): CancelablePromise<Array<UserResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users',
      query: {
        skip: skip,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create User
   * Register new user into the system.
   * - `:param user:` **Body Object with username, email, first name,
   * middle name [OPTIONAL], last name, password, gender [OPTIONAL],
   * birthdate [OPTIONAL], phone_number [OPTIONAL], address [OPTIONAL],
   * city [OPTIONAL], state [OPTIONAL] and country [OPTIONAL].**
   * - `:type user:` **UserCreate**
   * - `:return:` **User created with its id, username, email, first name
   * and middle name.**
   * - `:rtype:` **UserCreateResponse**
   * @param requestBody
   * @returns UserCreateResponse Successful Response
   * @throws ApiError
   */
  public static createUser(
    requestBody: UserCreate,
  ): CancelablePromise<UserCreateResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/users',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get User Me
   * Retrieve the current user's information.
   * - `:return:` **Response object for current user with id, username,
   * email, first_name, last_name, middle_name, gender, birthdate,
   * phone_number, city, country, is_active, is_superuser, created_at,
   * updated_at and analyses relationship.**
   * - `:rtype:` **UserResponse**
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  public static getUserMe(): CancelablePromise<UserResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/me',
    });
  }

  /**
   * Get User By Id
   * Retrieve an existing user's information given their user ID.
   * - `:param user_id:` **Unique identifier of the user to be retrieved**
   * - `:type user_id:` **PositiveInt**
   * - `:return:` **Found user with the given ID including its username,
   * email, first_name, last_name, middle_name, gender, birthdate,
   * phone_number, city, country, is_active, is_superuser, created_at,
   * updated_at and analyses relationship.**
   * - `:rtype:` **UserResponse**
   * @param userId ID of the User to searched
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  public static getUserById(userId: number): CancelablePromise<UserResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/{user_id}',
      path: {
        user_id: userId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Update User
   * Update an existing user's information given their user ID and new
   * information.
   * - `:param user_id:` **Unique identifier of the user to be updated**
   * - `:type user_id:` **PositiveInt**
   * - `:param user_in:` **New user data to update that can include:
   * username, email, first_name, middle_name, last_name, password,
   * gender, birthdate, phone_number, city and country.**
   * - `:type user_in:` **UserUpdate**
   * - `:return:` **Updated user with the given ID and its username, email,
   * first_name, last_name, middle_name, hashed password, gender,
   * birthdate, phone_number, city, country, is_active, is_superuser,
   * created_at and updated_at.**
   * - `:rtype:` **UserUpdateResponse**
   * @param userId ID of the User to searched
   * @param requestBody
   * @returns UserUpdateResponse Successful Response
   * @throws ApiError
   */
  public static updateUser(
    userId: number,
    requestBody: UserUpdate,
  ): CancelablePromise<UserUpdateResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/v1/users/{user_id}',
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete User
   * Delete an existing user given their user ID.
   * - `:param user_id:` **Unique identifier of the user to be deleted**
   * - `:type user_id:` **PositiveInt**
   * - `:return:` **Json Response object with the deleted information**
   * - `:rtype:` **Response**
   * @param userId ID of the User to searched
   * @returns void
   * @throws ApiError
   */
  public static deleteUser(userId: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/v1/users/{user_id}',
      path: {
        user_id: userId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
