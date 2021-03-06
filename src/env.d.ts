/**
 * Discord Debate Timer
 * @copyright 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io/
 * @license MIT
 */

declare namespace NodeJS {
    interface ProcessEnv {
        AUTHTOKEN: string, // Authentication Token
        APIKEY: string, // Google sheets API key
    }
}
