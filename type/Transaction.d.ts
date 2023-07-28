export type Transaction = {
  uid: number;
  amount: number;
  createTime: number;
  traxId: number;
  accountNo: string;
  traxType: string;
  receiverNo: string;
};

export type TransactionHistory = {
  transactions: Transaction[];
};
