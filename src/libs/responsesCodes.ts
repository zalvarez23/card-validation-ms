export enum HttpStatusCodes {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
export enum HttpStatusTypes {
  UNAUTHORIZED = "UNAUTHORIZED",
  EMPTY_REQUEST = "EMPTY_REQUEST",
  BAD_BODY_REQUEST = "BAD_BODY_REQUEST",
  EMPTY_CARD_REDIS = "EMPTY_CARD_REDIS",
}
export enum HttpStatusMessages {
  X_API_KEY_MISSING = "Authentication Token Api Key missing",
  AUTH_TOKEN_MISSING = "Authorization token missing",
  EMPTY_REQUEST = "Request body is empty",
  TOKEN_SUCCESSFULLY = "Token created successfully",
  INTERNAL_SERVER_ERROR = "An internal error occurred.",
  BAD_CARD_BODY_REQUEST = "Request body the card format is invalid .",
  BAD_EMAIL_BODY_REQUEST = "Request body the email format is invalid .",
  BAD_CVV_BODY_REQUEST = "Request body the cvv format is invalid .",
  BAD_MONTH_BODY_REQUEST = "Request body the month format is invalid .",
  BAD_YEAR_BODY_REQUEST = "Request body the year format is invalid .",
  EMPTY_CARD_REDIS = "The token data has expired or does not exist in the database..",
}
