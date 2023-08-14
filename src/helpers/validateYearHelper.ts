export const validateYearHelper = (year: string): boolean => {
  const currentYear: number = new Date().getFullYear();

  const isValidSize: boolean = /^(20\d{2})$/.test(year);
  const isValidYearExpiration: boolean =
    parseInt(year) >= currentYear && parseInt(year) <= currentYear + 5;

  return isValidSize && isValidYearExpiration;
};
