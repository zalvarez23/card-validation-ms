import { APIGatewayProxyResult } from "aws-lambda";
import { GenericError } from "./errors";
import { HttpStatusCodes, HttpStatusMessages } from "./responsesCodes";

export function handleError(error: unknown): APIGatewayProxyResult {
  if (error instanceof GenericError) {
    switch (error.getHttpStatus()) {
      case HttpStatusCodes.UNAUTHORIZED:
      case HttpStatusCodes.BAD_REQUEST:
        return {
          statusCode: error.getHttpStatus(),
          body: JSON.stringify({
            errorCode: error.errorCode,
            message: error.userMessage,
          }),
        };
      default:
        return {
          statusCode: 500,
          body: JSON.stringify({
            errorCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: HttpStatusMessages.INTERNAL_SERVER_ERROR,
          }),
        };
    }
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({
        errorCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        message: HttpStatusMessages.INTERNAL_SERVER_ERROR,
      }),
    };
  }
}
