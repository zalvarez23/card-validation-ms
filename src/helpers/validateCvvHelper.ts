export const validateCvvHelper = (cvv: number): boolean => {
  const sanitizedNumber: string = cvv.toString().replace(/\D/g, "");
  const isValidLength: boolean = /^\d{3,4}$/.test(sanitizedNumber);
  if (!isValidLength) {
    return false;
  }
  return true;
};
