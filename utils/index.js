import constants from "../constants/index.js";

export const lambdaResponse = (statusCode, body, headers = {}) => {
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
