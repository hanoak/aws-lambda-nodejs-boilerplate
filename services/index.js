// App's service/API calls resides here.

import axios from "axios";
import utils from "../utils/index.js";
import config from "../config/index.js";

const _makeApiCall = async ({ url, method, headers, data }) => {
  try {
    const res = await axios({
      url,
      timeout: config.AXIOS_TIMEOUT,
      method,
      ...(!utils.isEmpty(headers) && { headers }),
      ...(["PUT", "POST", "DELETE", "PATCH"].includes(method) && {
        data,
      }),
    });

    return res?.data;
  } catch (e) {
    console.error(JSON.stringify(e));
    throw e;
  }
};

const getData = async () => {
  const data = await _makeApiCall({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  });
  return data;
};

export default {
  getData,
};
