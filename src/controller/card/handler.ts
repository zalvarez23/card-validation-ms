import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { handleError } from "../../libs/handlerErrors";
import { CardTokenService } from "../../application/CardTokenService";
import { ContainerContext } from "../../di/context.di";
import { TYPES } from "../../di/TYPES";
import { Card } from "../../dominio/Card";
import {
  validateApiKey,
  validateAuthToken,
} from "../../middleware/interceptor";
import { validateRequestBodyCard } from "./validator/validator";
import { ResponseCardOK, ResponseTokenOK } from "../../libs/responseOk";
import { convertToResponseTokenDto } from "../../infrastructure/dto/TokenDto";
import { convertToResponseCardDto } from "../../infrastructure/dto/CardDto";

export const { container } = new ContainerContext();

export const createToken: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  try {
    const cardTokenService: CardTokenService = container.get(
      TYPES.CardTokenService
    );
    const apiKey = event.headers["X-Api-Key"];
    validateApiKey(apiKey);

    const requestBody = JSON.parse(event.body ?? "{}") as Card;
    const card = new Card(requestBody);
    validateRequestBodyCard(card);

    const tokenResult = await cardTokenService.createToken(card);
    return ResponseTokenOK(convertToResponseTokenDto(tokenResult));
  } catch (error) {
    // No podemos especificar el tipo exacto del error catch.
    return handleError(error);
  }
};

export const getCard: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  try {
    const cardTokenService: CardTokenService = container.get(
      TYPES.CardTokenService
    );
    const apiKey = event.headers["X-Api-Key"];
    validateApiKey(apiKey);

    const authToken = event.headers.Authorization || "";
    validateAuthToken(authToken);

    const card = await cardTokenService.getCard(authToken);
    return ResponseCardOK(convertToResponseCardDto(card));
  } catch (error) {
    console.log(error);
    // No podemos especificar el tipo exacto del error catch.
    return handleError(error);
  }
};
