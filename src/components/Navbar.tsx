import Image from "next/image";
import technoBankLogo from "@/assets/BankLogo.svg";
import globe from "@/assets/globe2.svg";
import Link from "next/link";
import { useLoginContext } from "../../context/LoginContext";

function Navbar() {
  const { isLogin, username } = useLoginContext();
  console.log(isLogin, username);
  return (
    <div className="flex justify-around items-center p-[10px] bg-primary ">
      <div className="hero flex items-center">
        <Link href={"/"} className="flex justify-center items-center gap-2 ">
          <Image src={technoBankLogo} alt="TechnoBank Logo" />
          <span className="text-orange-50 text-base font-normal">
            technoBank
          </span>
        </Link>
      </div>
      <div className="btn flex flex-row gap-4">
        <Image src={globe} alt="langIcon" className="text-light" />
        {isLogin ? (
          <Link
            href={"/dashboard"}
            className="bg-yellow text-white  px-[10px] py-[5px] text-xs font-normal rounded-lg hover:bg-yellow hover:text-white"
          >
            {username}
          </Link>
        ) : (
          <>
            <Link
              href={"/signup"}
              className="bg-white text-yellow  px-[10px] py-[5px] text-xs font-normal rounded-lg hover:bg-white hover:text-yellow "
            >
              Daftar
            </Link>
            <Link
              href={"/login"}
              className="bg-yellow text-white  px-[10px] py-[5px] text-xs font-normal rounded-lg hover:bg-yellow hover:text-white"
            >
              Masuk
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
