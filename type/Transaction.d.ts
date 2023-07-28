export type TransactionInfoBody = {
  accountNo: string;
  traxType: Array<string>;
  pageNumber: number;
  recordsPerPage: number;
  startDate: number;
  endDate: number;
};

export type TransactionData = {
  uid: number;
  amount: number;
  createTime: number;
  traxId: number;
  accountNo: string;
  traxType: string;
  receiverNo: string;
};

export type TransactionInfoResponse = {
  traceId: string;
  data: {
    transactions: Transaction[];
  };
  errCode: string;
  success: boolean;
};
