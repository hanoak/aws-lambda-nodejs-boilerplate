// Add all your app's constants here.

const constants = {
  ERROR_TEXTS: {
    INTERNAL_ERROR: "Internal error, please try again.",
    BAD_REQ: "Invalid data provided.",
  },
  HTTP_STATUS: {
    OK: 200,
    BAD_REQUEST: 400,
    UNPROCESSABLE_REQ: 422,
    INTERNAL_ERROR: 500,
  },
  LOGS: {
    APP_ENV: "App environment: ",
    REQ: "Execution started with: ",
    RES: "Execution completed with: ",
  },
};

export default constants;
