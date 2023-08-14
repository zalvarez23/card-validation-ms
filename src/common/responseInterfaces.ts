export interface IResponseTokenOK {
  statusCode: number;
  headers: IHeaders;
  body: string;
}

interface IHeaders {
  Authorization: string;
}
