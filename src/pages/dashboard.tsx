import Navbar from "@/components/Navbar";
import Image from "next/image";
import add from "@/assets/add.svg";
import { useEffect, useState } from "react";
import { useLoginContext } from "../context/LoginContext";
import MerchantCard from "@/components/MerchantCard";
import { AllBankAccount, BankAccountInfo } from "../type/BankAccount";
import Link from "next/link";
import { useRouter } from "next/router";

function Dashboard() {
  const { username } = useLoginContext();

  const router = useRouter();
  const { isLoggedIn } = useLoginContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const [bufferBankAccount, setbuff] = useState<AllBankAccount>([
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
    {
      _id: "1a2b3c4d5e6f7a8b9c0d1e2f",
      name: "nasi goreng keju",
      accountName: "AKUN UJI",
      accountNo: "123456789012345",
      verified: true,
      qrCodeImg: "123456789012345_1a2b3c4d5e6f7a8b9c0d1e2f.png",
      assets: [],
      __v: 1,
      accountInfo: {
        traceId: "f1e2d3c4b5a6",
        data: {
          uid: 987,
          balance: 25000000,
          accountName: "AKUN UJI",
          createTime: 1690612793902,
          accountNo: "123456789012345",
          updateTime: 1690612793902,
          id: 409,
          status: "Active",
        },
        success: true,
      },
    },
    {
      _id: "a1b2c3d4e5f6g7h8i9j0k1l",
      name: "sate ayam special",
      accountName: "UJIAN COBA",
      accountNo: "987654321098765",
      verified: true,
      qrCodeImg: "987654321098765_a1b2c3d4e5f6g7h8i9j0k1l.png",
      assets: [],
      __v: 2,
      accountInfo: {
        traceId: "p0o9i8u7y6t",
        data: {
          uid: 532,
          balance: 120000000,
          accountName: "UJIAN COBA",
          createTime: 1690612793902,
          accountNo: "987654321098765",
          updateTime: 1690612793902,
          id: 604,
          status: "Active",
        },
        success: true,
      },
    },
    {
      _id: "x1y2z3a4b5c6d7e8f9g0h1i",
      name: "es krim rasa stroberi",
      accountName: "TESTER123",
      accountNo: "111222333444555",
      verified: false,
      qrCodeImg: "111222333444555_x1y2z3a4b5c6d7e8f9g0h1i.png",
      assets: [],
      __v: 3,
      accountInfo: {
        traceId: "k1l2m3n4o5p",
        data: {
          uid: 789,
          balance: 50000000,
          accountName: "TESTER123",
          createTime: 1690612793902,
          accountNo: "111222333444555",
          updateTime: 1690612793902,
          id: 752,
          status: "Active",
        },
        success: true,
      },
    },
  ]);

  if (!isLoggedIn) {
    return;
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-md p-4">
        <h2 className="my-[9px] text-sm font-semibold">
          Selamat Datang, {`${username}`} !
        </h2>
        <h3 className="text-xs font-normal">Usaha UMKM-mu</h3>
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {bufferBankAccount.map((account: BankAccountInfo) => {
            return (
              <>
                <MerchantCard key={account._id} {...account} />
              </>
            );
          })}
        </div>
        <Link
          href={"/daftarumkm"}
          className="add-business flex flex-row items-center  gap-2 "
        >
          <Image src={add} alt="addIcon" />
          <h4 className="text-[10px] font-normal">Tambah usaha UMKM</h4>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
