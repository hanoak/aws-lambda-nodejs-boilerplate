import constants from "./constants/index.js";
import utils from "./utils/index.js";
import config from "./config/index.js";
import services from "./services/index.js";

export const handler = async ({
  httpMethod,
  body,
  queryStringParameters: query,
}) => {
  try {
    console.info(constants.LOGS.APP_ENV, config.APP_ENV);
    console.info(constants.LOGS.REQ, httpMethod, query, body);

    //Make use of newBody in your,I'm just printing it out here.
    // Parsing the body if it's JSON string.
    const newBody = JSON.parse(body || "{}");
    console.info(newBody);

    // Sample snippet to use services to make API calls.
    if ((httpMethod === "GET", query?.code === "getdata")) {
      return utils.lambdaResponse(
        constants.HTTP_STATUS.OK,
        await services.getData(),
      );
    }

    // TODO add your app's code here.

    return utils.lambdaResponse(constants.HTTP_STATUS.OK, "Lambda response!");
  } catch (error) {
    console.error(constants.ERROR_TEXTS.INTERNAL_ERROR, error);

    return utils.lambdaResponse(
      constants.HTTP_STATUS.INTERNAL_ERROR,
      constants.ERROR_TEXTS.INTERNAL_ERROR,
    );
  }
};
