import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from "aws-lambda";
import {
  HttpStatusCodes,
  HttpStatusMessages,
} from "../../src/libs/responsesCodes";
import * as handler from "./../../src/controller/card/handler";
import {
  CARD_MOCK,
  GET_REDIS_CLIENT_MOCK_OK,
  GET_REDIS_CLIENT_MOCK_EXPIRED,
  TOKEN_MOCK_CORRECT,
  TOKEN_MOCK_FAILET,
} from "../mocks";
import { Card } from "../../src/dominio/Card";
describe("Lambda Functions GetCard", () => {
  it("Correct Response : OK", async () => {
    GET_REDIS_CLIENT_MOCK_OK();
    const event = {
      headers: {
        Authorization: TOKEN_MOCK_CORRECT,
        "X-Api-Key": process.env.API_KEY,
      },
    } as unknown as APIGatewayProxyEvent;
    const response = (await handler.getCard(
      event,
      {} as Context,
      {} as Callback
    )) as APIGatewayProxyResult;
    const cardBody = JSON.parse(response?.body) as Card;

    expect(response.statusCode).toEqual(HttpStatusCodes.OK);
    expect(cardBody.card_number).toEqual(CARD_MOCK.card_number);
    expect(cardBody.email).toEqual(CARD_MOCK.email);
    expect(cardBody.expiration_month).toEqual(CARD_MOCK.expiration_month);
    expect(cardBody.expiration_year).toEqual(CARD_MOCK.expiration_year);
  });

  it("Correct Response : EMPTY RESPONSE OR EXPIRED", async () => {
    GET_REDIS_CLIENT_MOCK_EXPIRED();
    const event = {
      headers: {
        Authorization: TOKEN_MOCK_FAILET,
        "X-Api-Key": process.env.API_KEY,
      },
    } as unknown as APIGatewayProxyEvent;
    const response = (await handler.getCard(
      event,
      {} as Context,
      {} as Callback
    )) as APIGatewayProxyResult;

    expect(response.statusCode).toEqual(HttpStatusCodes.BAD_REQUEST);
    expect(JSON.parse(response.body).message).toBe(
      HttpStatusMessages.EMPTY_CARD_REDIS
    );
  });
  it("Correct Response : UNAUTHORIZED x-api-key", async () => {
    const event = {
      headers: {
        "X-Api-Key": "",
      },
    } as unknown as APIGatewayProxyEvent;

    const response = (await handler.getCard(
      event,
      {} as Context,
      {} as Callback
    )) as APIGatewayProxyResult;

    expect(response.statusCode).toEqual(HttpStatusCodes.UNAUTHORIZED);
    expect(JSON.parse(response.body).message).toBe(
      HttpStatusMessages.X_API_KEY_MISSING
    );
  });

  it("Correct Response : UNAUTHORIZED Authorization", async () => {
    const event = {
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    } as unknown as APIGatewayProxyEvent;
    const response = (await handler.getCard(
      event,
      {} as Context,
      {} as Callback
    )) as APIGatewayProxyResult;

    expect(response.statusCode).toEqual(HttpStatusCodes.UNAUTHORIZED);
    expect(JSON.parse(response.body).message).toBe(
      HttpStatusMessages.AUTH_TOKEN_MISSING
    );
  });
});
