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
