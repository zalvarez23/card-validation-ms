export const validateMonthHelper = (month: string): boolean => {
  const sanitizedNumber: string = month.replace(/\D/g, "");
  const isValidLength: boolean = /^\d{2}$/.test(sanitizedNumber);
  if (!isValidLength) {
    return false;
  }
  return true;
};
