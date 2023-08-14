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
import { CARD_MOCK } from "../mocks";
describe("Lambda Functions CreateToken", () => {
  it("Correct Response : OK", async () => {
    const bodyTest = CARD_MOCK;
    const event = {
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
      body: JSON.stringify(bodyTest),
    } as unknown as APIGatewayProxyEvent;
    const response = (await handler.createToken(
      event,
      {} as Context,
      {} as Callback
    )) as APIGatewayProxyResult;

    expect(response.statusCode).toEqual(HttpStatusCodes.OK);
    expect(JSON.parse(response.body).message).toBe(
      HttpStatusMessages.TOKEN_SUCCESSFULLY
    );
    expect(response.headers?.Authorization).toBeDefined();
  });

  it("Correct Response : UNAUTHORIZED", async () => {
    const bodyTest = CARD_MOCK;
    const event = {
      headers: {
        "X-Api-Key": "",
      },
      body: JSON.stringify(bodyTest),
    } as unknown as APIGatewayProxyEvent;
    const response = (await handler.createToken(
      event,
      {} as Context,
      {} as Callback
    )) as APIGatewayProxyResult;

    expect(response.statusCode).toEqual(HttpStatusCodes.UNAUTHORIZED);
    expect(JSON.parse(response.body).message).toBe(
      HttpStatusMessages.X_API_KEY_MISSING
    );
  });
});
