/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Model } from '../models/Model';
import type { ModelCreate } from '../models/ModelCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModelsService {
  /**
   * Get Models
   * Retrieves all Models, with pagination.
   * - `:param skip:` **Number of models to skip**
   * - `:type skip:` **NonNegativeInt**
   * - `:param limit:` **Maximum number of models to return**
   * - `:type limit:` **PositiveInt**
   * - `:return:` **All models from logged-in user with id, tweet_id,
   * model_name, accuracy, precision, recall, f1_score, roc_auc,
   * computing_time, analysis_id and its creation timestamp**
   * - `:rtype:` **list[Model]**
   * @param skip Number of models to skip
   * @param limit Maximum number of models to return
   * @returns Model Successful Response
   * @throws ApiError
   */
  public static getModels(
    skip?: number,
    limit: number = 100,
  ): CancelablePromise<Array<Model>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/models',
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
   * Create Model
   * Create a new model into the system.
   * - `:param model:` **Body Object with tweet_id, model_name, accuracy,
   * precision, recall, f1_score, roc_auc, computing_time and
   * relationship with Analysis: analysis_id (OPTIONAL)**
   * - `:type model:` **ModelCreate**
   * - `:return:` **Model created with id, tweet_id, model_name, accuracy,
   * precision, recall, f1_score, roc_auc, computing_time, relationship
   * with Analysis: analysis_id and its creation timestamp**
   * - `:rtype:` **Model**
   * @param requestBody
   * @returns Model Successful Response
   * @throws ApiError
   */
  public static createModel(
    requestBody: ModelCreate,
  ): CancelablePromise<Model> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/models',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Model
   * Retrieves a specific Model by its ID.
   * - `:param model_id:` **Path Parameter of Model ID to be retrieved**
   * - `:type model_id:` **PositiveInt**
   * - `:return:` **Found Model from logged-in user with id, tweet_id,
   * model_name, accuracy, precision, recall, f1_score, roc_auc,
   * computing_time, analysis_id and its creation timestamp**
   * - `:rtype:` **Model**
   * @param modelId ID of the Model to searched
   * @returns Model Successful Response
   * @throws ApiError
   */
  public static getModel(modelId: number): CancelablePromise<Model> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/models/{model_id}',
      path: {
        model_id: modelId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
