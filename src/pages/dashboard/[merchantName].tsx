import Navbar from "@/components/Navbar";
import formatCurrency from "@/utils/rupiahFormatter";
import Image from "next/image";
import eyeSlash from "@/assets/eye-slash-fill.svg";
import eyeFill from "@/assets/eye-fill.svg";
import { useState } from "react";
import { MerchantDetail, monthlyIncome } from "@/type/BankAccount";

const {
  _id,
  name,
  accountName,
  accountNo,
  verified,
  qrCodeImg,
  assets,
  __v,
  balance,
} = {
  _id: "64c4b43944904e11cbfe2421",
  name: "mie kingkong",
  accountName: "TEST NGAB",
  accountNo: "585945782951059",
  verified: true,
  qrCodeImg: "1690612794128_64c4b43944904e11cbfe2421.png",
  assets: [],
  __v: 0,
  balance: 4699700,
} as MerchantDetail;

const income: monthlyIncome = {
  monthlyData: {
    januari: 0,
    februari: 0,
    maret: 0,
    april: 0,
    mei: 0,
    juni: 0,
    juli: 60000,
    agustus: 0,
    september: 0,
    oktober: 0,
    november: 0,
    desember: 0,
  },
  total: 60000,
};

function MerchantStore() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="mx-auto w-96 py-4">
        <div>
          <h1 className="text-xl font-normal">Detail Toko</h1>
          <h2 className="mb-3 text-xl font-semibold">{name}</h2>
        </div>
        <div className="mb-2 flex flex-row gap-5">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-lg font-semibold">QR CODE</h4>
            {/* <Image src={""} alt="" /> */}
            <div className="h-40 w-40 bg-black"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-base font-normal">Nomor Rekening</h4>
            <h3 className="mb-2 text-xl font-semibold">{accountNo}</h3>
            <h4 className="text-base font-normal">Saldo</h4>
            <h3>
              <span className="flex items-center gap-3 text-xl font-semibold">
                {showBalance ? formatCurrency(balance) : "Rp xxxxxxxxxx"}
                {showBalance ? (
                  <Image
                    className="cursor-pointer"
                    src={eyeFill}
                    alt="eyeFill"
                    onClick={() => setShowBalance((val) => !val)}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src={eyeSlash}
                    alt="eyeSlash"
                    onClick={() => setShowBalance((val) => !val)}
                  />
                )}
              </span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-2 flex gap-3">
            <h2 className="text-base font-medium">
              {verified
                ? "Toko anda sudah terverifikasi."
                : "Toko anda belum terverifikasi."}
            </h2>
            <input
              type="checkbox"
              name=""
              checked={verified}
              className="pointer-events-none"
            />
          </div>
          <div className="my-2 text-base font-medium">
            <h2>Pemasukan dari UMKM anda</h2>
          </div>
          <section
            id="chartJanToJune"
            className="my-2 flex h-36 w-64 items-end justify-center border-b-2 border-l-2 border-black  "
          >
            <div
              className={`h-[${
                (income.monthlyData.januari / income.total) * 144
              }px] w-9 bg-primary `}
            />
            <div
              className={`h-[${
                (income.monthlyData.februari / income.total) * 144
              }px] w-9 bg-yellow `}
            />
            <div
              className={`h-[${
                (income.monthlyData.maret / income.total) * 144
              }px] w-9 bg-primary `}
            />
            <div
              className={`h-[${
                (income.monthlyData.april / income.total) * 144
              }px] w-9 bg-yellow `}
            />
            <div
              className={`h-[${
                (income.monthlyData.mei / income.total) * 144
              }px] w-9 bg-primary `}
            />
            <div
              className={`h-[${
                (income.monthlyData.juni / income.total) * 144
              }px] w-9 bg-yellow `}
            />
          </section>
          <div className="flex w-64 justify-center">
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Januari
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Februari
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Maret
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              April
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Mei
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Juni
            </span>
          </div>
          <section
            id="chartJulToDes"
            className="my-2 flex h-36 w-64 items-end justify-center border-b-2 border-l-2 border-black  "
          >
            <div
              className={`h-[${
                (income.monthlyData.juli / income.total) * 144
              }px] w-9 bg-primary `}
            />
            <div
              className={`h-[${
                (income.monthlyData.agustus / income.total) * 144
              }px] w-9 bg-yellow `}
            />
            <div
              className={`h-[${
                (income.monthlyData.september / income.total) * 144
              }px] w-9 bg-primary `}
            />
            <div
              className={`h-[${
                (income.monthlyData.oktober / income.total) * 144
              }px] w-9 bg-yellow `}
            />
            <div
              className={`h-[${
                (income.monthlyData.november / income.total) * 144
              }px] w-9 bg-primary `}
            />
            <div
              className={`h-[${
                (income.monthlyData.desember / income.total) * 144
              }px] w-9 bg-yellow `}
            />
          </section>
          <div className="flex w-64 justify-center">
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Juli
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Agustus
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              September
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Oktober
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              November
            </span>
            <span className="mx-1 w-9 text-center text-[8px] font-normal">
              Desember
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantStore;
