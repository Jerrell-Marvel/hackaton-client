import { BankAccountInfo } from "../../type/BankAccount";

function MerchantCard({ name }: BankAccountInfo) {
  return (
    <>
      <div className="bg-primary w-[138px] h-[79px]">
        <h3 className="w-full px-2 bg-yellow">{name}</h3>
      </div>
    </>
  );
}

export default MerchantCard;
