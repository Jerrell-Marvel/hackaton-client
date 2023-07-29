export type TokenBody = {
  username: string;
  loginPassword: string;
};

export type TokenResponse = {
  traceId: string;
  data: {
    accessToken: string;
  };
  success: boolean;
};
