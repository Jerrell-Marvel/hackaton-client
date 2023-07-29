import Image from "next/image";
import technoBankLogo from "@/assets/BankLogo.svg";
import globe from "@/assets/globe2.svg";
import Link from "next/link";
import { useLoginContext } from "../context/LoginContext";

function Navbar() {
  const { isLoggedIn, username } = useLoginContext();
  return (
    <div className="flex items-center justify-around bg-primary p-[10px] drop-shadow-sm ">
      <div className="hero flex items-center">
        <Link href={"/"} className="flex items-center justify-center gap-2 ">
          <Image src={technoBankLogo} alt="TechnoBank Logo" />
          <span className="text-base font-normal text-orange-50">
            technoBank
          </span>
        </Link>
      </div>
      <div className="btn flex flex-row gap-4">
        <Image src={globe} alt="langIcon" className="text-light" />
        {isLoggedIn ? (
          <Link
            href={"/dashboard"}
            className="rounded-lg bg-yellow  px-[10px] py-[5px] text-xs font-normal text-white hover:bg-yellow hover:text-white"
          >
            {username}
          </Link>
        ) : (
          <>
            <Link
              href={"/signup"}
              className="rounded-lg bg-white  px-[10px] py-[5px] text-xs font-normal text-yellow hover:bg-white hover:text-yellow "
            >
              Daftar
            </Link>
            <Link
              href={"/login"}
              className="rounded-lg bg-yellow  px-[10px] py-[5px] text-xs font-normal text-white hover:bg-yellow hover:text-white"
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
