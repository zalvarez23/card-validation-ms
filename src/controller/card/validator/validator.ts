import { Card } from "../../../dominio/Card";
import { BadRequestError } from "../../../libs/errors";
import {
  HttpStatusMessages,
  HttpStatusTypes,
} from "../../../libs/responsesCodes";

export const validateRequestBodyCard = (card: Card): void => {
  const validations = [
    {
      validationFn: card.validateEmail,
      errorMessage: HttpStatusMessages.BAD_EMAIL_BODY_REQUEST,
    },
    {
      validationFn: card.validateCard_number,
      errorMessage: HttpStatusMessages.BAD_CARD_BODY_REQUEST,
    },
    {
      validationFn: card.validateCvv,
      errorMessage: HttpStatusMessages.BAD_CVV_BODY_REQUEST,
    },
    {
      validationFn: card.validateYear,
      errorMessage: HttpStatusMessages.BAD_YEAR_BODY_REQUEST,
    },
    {
      validationFn: card.validateMonth,
      errorMessage: HttpStatusMessages.BAD_MONTH_BODY_REQUEST,
    },
  ];

  for (const { validationFn, errorMessage } of validations) {
    if (!validationFn.call(card)) {
      throw new BadRequestError(HttpStatusTypes.BAD_BODY_REQUEST, errorMessage);
    }
  }
};
