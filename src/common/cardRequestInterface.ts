export interface CardRequestBody {
  email: string;
  card_number: number;
  cvv: number;
  expiration_year: string;
  expiration_month: string;
  token: string;
}
