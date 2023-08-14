export const validateCardHelper = (cardNumber: number): boolean => {
  const card = cardNumber.toString();
  const isValidLength: boolean = /^\d{13,16}$/.test(card);

  if (!isValidLength) {
    return false;
  }

  let sum = 0;
  let double = false;

  for (let i = card.length - 1; i >= 0; i--) {
    let digit = parseInt(card.charAt(i), 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
};
