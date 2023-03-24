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
     * Create a new analysis into the system.
 * - :param tweet_id: Path Parameter that identifies the tweet to be
 * analyzed
 * - :type tweet_id: PositiveInt
 * - :return: Analysis created with id, tweet_id, analysis_name, accuracy,
 * precision, recall, f1_score, roc_auc, computing_time, relationship
 * with Analysis: analysis_id and its creation timestamp
 * - :rtype: Analysis
     * @param tweetId Tweet ID to predict sentiment
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
     * Create multiple analyses into the system.
 * - :param username: Path Parameter that identifies username to fetch
 * tweets
 * - :param number_tweets: Query parameter for the quantity of recent
 * tweets to analyse for the given user
 * - :type number_tweets: PositiveInt
 * - :return: Analysis created with id, tweet_id, analysis_name, accuracy,
 * precision, recall, f1_score, roc_auc, computing_time, relationship
 * with Analysis: analysis_id and its creation timestamp
 * - :rtype: list[Analysis]
     * @param username Username to fetch tweets for analysis
     * @param numberTweets Quantity of recent tweets to analyse for the given user
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
     * Search for specific Analysis by ID from the system.
 * - :param analysis_id: Path Parameter of Analysis ID to search
 * - :type analysis_id: PydanticObjectId
 * - :return: Found Analysis from logged-in user with id, tweet_id,
 * analysis_name, accuracy, precision, recall, f1_score, roc_auc,
 * computing_time, analysis_id and its creation timestamp
 * - :rtype: Analysis
     * @param analysisId ID of the AnalysisCreate to searched
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
     * Retrieve all analyses from the system.
 * - :param skip: Offset from where to start returning analyses
 * - :type skip: NonNegativeInt
 * - :param limit: Limit the number of results from query
 * - :type limit: PositiveInt
 * - :return: All analyses from logged-in user with id, tweet_id,
 * analysis_name, accuracy, precision, recall, f1_score, roc_auc,
 * computing_time, analysis_id and its creation timestamp
 * - :rtype: list[Analysis]
     * @param skip Skip users
     * @param limit Limit pagination
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
