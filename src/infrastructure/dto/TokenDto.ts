import { Token } from "../../dominio/Token";

export interface TokenDto {
  bearerToken: string;
}

export const convertToResponseTokenDto = (token: Token): string => {
  return `Bearer ${token.bearerToken}`;
};
