export const VALID_DOMAINS_EMAILS = ["gmail.com", "hotmail.com", "yahoo.es"];

export const VALID_CARD_TYPES = [
  { pattern: /^(123|4[0-9]{2})/, type: "Visa/Mastercard" },
  { pattern: /^4532/, type: "Amex" },
];

export type ECardTypes = "Visa/Mastercard" | "Amex" | "defaultCard";

export const CARD_TYPE_DEFAULT = "defaultCard";
