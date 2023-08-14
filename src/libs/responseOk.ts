import { APIGatewayProxyResult } from "aws-lambda";
import { HttpStatusCodes, HttpStatusMessages } from "./responsesCodes";
import { CardDto } from "../infrastructure/dto/CardDto";

export const ResponseTokenOK = (bearerToken: string): APIGatewayProxyResult => {
  return {
    statusCode: HttpStatusCodes.OK,
    headers: {
      Authorization: bearerToken,
    },
    body: JSON.stringify({
      token: bearerToken,
      statusCode: HttpStatusCodes.OK,
      message: HttpStatusMessages.TOKEN_SUCCESSFULLY,
    }),
  };
};

export const ResponseCardOK = (card: CardDto): APIGatewayProxyResult => {
  return {
    statusCode: HttpStatusCodes.OK,
    body: JSON.stringify(card),
  };
};
