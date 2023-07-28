export type CreateUserBody = {
  ktpId: string;
  username: string;
  loginPassword: string;
  phoneNumber: string;
  birthDate: string;
  gender: number;
  email: string;
};

export type CreateUserResponse = {
  traceId: string;
  data: {
    uid: number;
    phoneNumber: string;
    gender: string;
    createTime: number;
    ktpId: string;
    updateTime: number;
    birthDate: string;
    email: string;
    username: string;
  };
  success: boolean;
};

export type UserInfo = {
  traceId: string;
  data: {
    uid: number;
    phoneNumber: string;
    gender: string;
    createTime: number;
    ktpId: string;
    updateTime: number;
    birthDate: string;
    email: string;
    username: string;
  };
  success: boolean;
};
