import Link from "next/link";
import { BankAccountInfo } from "../type/BankAccount";
import formatCurrency from "@/utils/rupiahFormatter";

function MerchantCard(props: BankAccountInfo) {
  console.log(props);
  return (
    <>
      <div className="relative m-4 w-[138px] rounded-[10px] bg-primary drop-shadow-sm">
        <h3 className="absolute -top-2 h-[19px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-yellow px-2 py-0.5 text-center text-[11px] font-normal text-light">
          {props.name}
        </h3>
        <div className="flex w-full flex-col items-end px-[10px] pt-4 text-light">
          <div className="w-full text-[8px] font-normal">Saldo :</div>
          <div className="w-full text-xs font-semibold">{`${formatCurrency(
            props.accountInfo.data.balance,
          )},-`}</div>
          <Link
            href={`/dashboard/${props.name}`}
            className="my-4 rounded-lg bg-white px-[10px] py-[5px] text-[9px] font-normal text-yellow hover:bg-white hover:text-yellow"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </>
  );
}

export default MerchantCard;
