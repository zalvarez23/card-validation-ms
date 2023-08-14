import { UnauthorizedError } from "../libs/errors";
import { HttpStatusTypes, HttpStatusMessages } from "../libs/responsesCodes";

export const validateApiKey = (apiKey: string | undefined): void => {
  if (apiKey !== process.env.API_KEY) {
    throw new UnauthorizedError(
      HttpStatusTypes.UNAUTHORIZED,
      HttpStatusMessages.X_API_KEY_MISSING
    );
  }
};

export const validateAuthToken = (token: string | undefined): void => {
  if (!token) {
    throw new UnauthorizedError(
      HttpStatusTypes.UNAUTHORIZED,
      HttpStatusMessages.AUTH_TOKEN_MISSING
    );
  }
};
