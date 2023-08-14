import { TOKEN_CHARACTERS, TOKEN_LENGTH } from "../common/tokenConst";

export const generateRandomToken = (): string => {
  const characters = TOKEN_CHARACTERS;
  return Array.from(
    { length: TOKEN_LENGTH },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};
