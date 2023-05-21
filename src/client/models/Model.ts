/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Schema for representing a Model.
 */
export type Model = {
    /**
     * ID of the Model
     */
    id: number;
    /**
     * ID of the Tweet
     */
    tweet_id: number;
    /**
     * Name of the model
     */
    model_name: string;
    /**
     * Accuracy score of the model
     */
    accuracy: number;
    /**
     * Precision score of the model
     */
    precision: number;
    /**
     * Recall score of the model
     */
    recall: number;
    /**
     * F1 score of the model
     */
    f1_score: number;
    /**
     * Area Under the Receiver Operating Characteristic Curve for the model
     */
    roc_auc: number;
    /**
     * The time it took to classify the tweet
     */
    computing_time: number;
    /**
     * Time the Model was executed
     */
    created_at?: string;
    /**
     * ID of the Analysis where the model was executed
     */
    analysis_id?: number;
};
