import Navbar from "@/components/Navbar";
import React from "react";
import { useLoginContext } from "../../context/LoginContext";
import MerchantCard from "@/components/MerchantCard";

function Dashboard() {
  const { isLoggedIn } = useLoginContext();

  const bufferBankAccount = [
    {
      _id: "64c4b43944904e11cbfe2421",
      name: "mie kingkong",
      accountName: "TEST NGAB",
      accountNo: "585945782951059",
      verified: false,
      qrCodeImg: "1690612794128_64c4b43944904e11cbfe2421.png",
      assets: [],
      __v: 0,
      accountInfo: {
        traceId: "e3a9a670-dca9-4da2-97bb-6886e1a8030e",
        data: {
          uid: 247,
          balance: 4000000,
          accountName: "TEST NGAB",
          createTime: 1690612793902,
          accountNo: "585945782951059",
          updateTime: 1690612793902,
          id: 208,
          status: "Active",
        },
        success: true,
      },
    },
  ];

  return (
    <>
      <Navbar />
      {bufferBankAccount.map((account) => {
        // return <MerchantCard  />;
      })}
    </>
  );
}

export default Dashboard;
