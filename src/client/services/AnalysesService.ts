/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Analysis } from '../models/Analysis';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnalysesService {

    /**
     * Create Analysis
     * Creates a sentiment analysis for a tweet specified by its ID.
 * - `:param tweet_id:` **Path Parameter that identifies the tweet to be
 * analyzed**
 * - `:type tweet_id:` **PositiveInt**
 * - `:return:` **Analysis created with id, tweet_id, analysis_name, accuracy,
 * precision, recall, f1_score, roc_auc, computing_time, relationship
 * with Analysis: analysis_id and its creation timestamp**
 * - `:rtype:` **Analysis**
     * @param tweetId ID of the tweet to be analysed
     * @returns Analysis Successful Response
     * @throws ApiError
     */
    public static createAnalysis(
tweetId: number,
): CancelablePromise<Analysis> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/analyses/{tweet_id}',
            path: {
                'tweet_id': tweetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Multiple Analysis
     * Creates sentiment analyses for multiple tweets of a specified
 * Twitter user.
 * - `:param username:` **Path Parameter that identifies Twitter
 * username whose tweets are to be analysed**
 * - `:param number_tweets:` **Query parameter for the quantity of recent
 * tweets to analyse for the given user**
 * - `:type number_tweets:` **PositiveInt**
 * - `:return:` **Analysis created with id, tweet_id, analysis_name, accuracy,
 * precision, recall, f1_score, roc_auc, computing_time, relationship
 * with Analysis: analysis_id and its creation timestamp**
 * - `:rtype:` **list[Analysis]**
     * @param username Username whose tweets are to be analysed
     * @param numberTweets Number of recent tweets to be analysed for the user
     * @returns Analysis Successful Response
     * @throws ApiError
     */
    public static createMultipleAnalysis(
username: string,
numberTweets: number,
): CancelablePromise<Array<Analysis>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/analyses/batch/{username}',
            path: {
                'username': username,
            },
            query: {
                'number_tweets': numberTweets,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Analysis
     * Retrieves a specific Analysis by its ID.
 * - `:param analysis_id:` **Path Parameter of Analysis ID to search**
 * - `:type analysis_id:` **PydanticObjectId**
 * - `:return:` **Found Analysis from logged-in user with id, tweet_id,
 * analysis_name, accuracy, precision, recall, f1_score, roc_auc,
 * computing_time, analysis_id and its creation timestamp**
 * - `:rtype:` **Analysis**
     * @param analysisId ID of the Analysis to be retrieved
     * @returns Analysis Successful Response
     * @throws ApiError
     */
    public static getAnalysis(
analysisId: number,
): CancelablePromise<Analysis> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/analyses/{analysis_id}',
            path: {
                'analysis_id': analysisId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Analyses
     * Retrieves all Analyses, with pagination.
 * - `:param skip:` **Number of analyses to skip**
 * - `:type skip:` **NonNegativeInt**
 * - `:param limit:` **Maximum number of analyses to return**
 * - `:type limit:` **PositiveInt**
 * - `:return:` **All analyses from logged-in user with id, tweet_id,
 * analysis_name, accuracy, precision, recall, f1_score, roc_auc,
 * computing_time, analysis_id and its creation timestamp**
 * - `:rtype:` **list[Analysis]**
     * @param skip Number of analyses to skip
     * @param limit Maximum number of analyses to return
     * @returns Analysis Successful Response
     * @throws ApiError
     */
    public static getAnalyses(
skip?: number,
limit: number = 100,
): CancelablePromise<Array<Analysis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/analyses',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
