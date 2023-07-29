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

export type monthlyIncome = {
  monthlyData: {
    januari: number;
    februari: number;
    maret: number;
    april: number;
    mei: number;
    juni: number;
    juli: number;
    agustus: number;
    september: number;
    oktober: number;
    november: number;
    desember: number;
  };
  total: number;
};

export type MerchantDetail = {
  _id: string;
  name: string;
  accountName: string;
  accountNo: string;
  verified: boolean;
  qrCodeImg: string;
  assets: [];
  __v: number;
  balance: number;
};
