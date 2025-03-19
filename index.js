import constants from "./constants/index.js";
import { lambdaResponse } from "./utils/index.js";
import config from "./config/index.js";

export const handler = async ({ httpMethod, body }) => {
  try {
    console.info(constants.LOGS.APP_ENV, config.APP_ENV);
    console.info(constants.LOGS.REQ, httpMethod, body);

    return lambdaResponse(constants.HTTP_STATUS.OK, "Lambda response!");
  } catch (error) {
    console.error(constants.ERROR_TEXTS.INTERNAL_ERROR, error);

    return lambdaResponse(
      constants.HTTP_STATUS.INTERNAL_ERROR,
      constants.ERROR_TEXTS.INTERNAL_ERROR,
    );
  }
};
