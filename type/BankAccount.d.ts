export type CreateAccountResponse = {
  traceId: string;
  data: {
    uid: number;
    balance: number;
    accountName: string;
    createTime: number;
    accountNo: string;
    updateTime: number;
    status: string;
  };
  success: boolean;
};

export type BankAccountInfo = {
  _id: string;
  name: string;
  accountName: string;
  accountNo: string;
  verified: boolean;
  qrCodeImg: string;
  assets: [];
  __v: number;
  accountInfo: {
    traceId: string;
    data: {
      uid: number;
      balance: number;
      accountName: string;
      createTime: number;
      accountNo: string;
      updateTime: number;
      id: number;
      status: string;
    };
    success: boolean;
  };
};

export type AllBankAccount = Array<BankAccountInfo>;
