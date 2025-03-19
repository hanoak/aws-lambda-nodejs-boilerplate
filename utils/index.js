// App's utility functions resides here.

import constants from "../constants/index.js";

const isEmpty = (val) =>
  val === undefined ||
  val === null ||
  (typeof val === "object" && !Object.keys(val)?.length) ||
  (typeof val === "string" && !val.trim().length);

const lambdaResponse = (statusCode, body, headers = {}) => {
  console.info(constants.LOGS.RES, statusCode);
  return {
    statusCode,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      ...headers,
    },
    body: JSON.stringify(body),
  };
};

export default {
  isEmpty,
  lambdaResponse,
};
