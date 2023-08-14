import * as RedisMock from "redis-mock";

export const CARD_MOCK = {
  email: "kevinsalazar30@gmail.com",
  card_number: 4111111111111111,
  cvv: 124,
  expiration_year: "2024",
  expiration_month: "09",
};

export const TOKEN_MOCK_CORRECT = "jgutorGASHJSDJ23";
export const TOKEN_MOCK_FAILET = "jgutor123AADJ23";

export const REDIS_CLIENT_MOCK = RedisMock.createClient();

export const GET_REDIS_CLIENT_MOCK_OK = () => {
  if (REDIS_CLIENT_MOCK) {
    const mockHget = jest.fn().mockResolvedValue(JSON.stringify(CARD_MOCK));
    REDIS_CLIENT_MOCK.hget = mockHget;
  }
};

export const GET_REDIS_CLIENT_MOCK_EXPIRED = () => {
  if (REDIS_CLIENT_MOCK) {
    const mockHget = jest.fn().mockResolvedValue(null);
    REDIS_CLIENT_MOCK.hget = mockHget;
  }
};
