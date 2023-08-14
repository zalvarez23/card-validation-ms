import {
  CARD_TYPE_DEFAULT,
  ECardTypes,
  VALID_CARD_TYPES,
} from "../common/cardConst";

export const getCardTypeHelper = (card_number: number): ECardTypes => {
  const cardPatterns = VALID_CARD_TYPES;
  const matchingTypes = cardPatterns.find((pattern) =>
    pattern.pattern.test(card_number.toString())
  );
  return (matchingTypes ? matchingTypes.type : CARD_TYPE_DEFAULT) as ECardTypes;
};
