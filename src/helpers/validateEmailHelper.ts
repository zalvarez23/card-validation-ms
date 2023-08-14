import { VALID_DOMAINS_EMAILS } from "../common/cardConst";

export const validateEmailHelper = (email: string): boolean => {
  const validDomains: Array<string> = VALID_DOMAINS_EMAILS;
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const match = email.match(emailRegex);
  if (!match) {
    return false;
  }
  const [, domain] = match[0].split("@");
  return validDomains.includes(domain);
};
