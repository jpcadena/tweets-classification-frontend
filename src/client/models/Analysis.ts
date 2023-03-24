/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Model } from './Model';

/**
 * Analysis class that inherits from AnalysisId, AnalysisBase and
 * AnalysisTarget.
 */
export type Analysis = {
    /**
     * ID of the Analysis
     */
    id: number;
    /**
     * ID of the Tweet
     */
    tweet_id: number;
    /**
     * The actual UTF-8 text of the status update
     */
    content: string;
    /**
     * Username to identify the user
     */
    tweet_username: string;
    /**
     * Time the Analysis was performed
     */
    created_at?: string;
    /**
     * ID of the User who performed the Analysis
     */
    user_id: number;
    /**
     * List of performed model
     */
    models?: Array<Model>;
    /**
     * True if the user is active; otherwise false
     */
    target: boolean;
};
