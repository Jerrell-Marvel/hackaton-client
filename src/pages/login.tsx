import { Poppins } from "next/font/google";
import Image from "next/image";
import usernameIcon from "@/assets/username.svg";
import passwordIcon from "@/assets/password.svg";
import technoBankLogo from "@/assets/BankLogo.svg";
import { useState } from "react";
import Link from "next/link";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

function Login() {
  const [login, setLogin] = useState({});

  return (
    <section className="w-full min-h-screen bg-gray-800  flex justify-center items-center">
      <div className="bg-primary w-96 h-[850px]  justify-center z-10 px-20  lg:rounded-lg">
        <div className="hero">
          <span className="flex justify-center items-center gap-2 my-[45px]">
            <Image src={technoBankLogo} alt="TechnoBank Logo" />
            <span className="text-orange-50 text-base font-normal">
              technoBank
            </span>
          </span>
          <h1
            className={`${poppins.className} text-light text-3xl text-center mb-10`}
          >
            Masuk
          </h1>
        </div>
        <form action="submit" className="flex flex-col gap-[10px] ">
          <label htmlFor="username" className="text-light px-2">
            <span className="text-sm font-light">Nama Pengguna</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={usernameIcon} alt="username" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40"
                type="text"
                id="username"
                placeholder="ketik nama pengguna disini ..."
              />
            </div>
          </label>
          <label htmlFor="password" className="text-light px-2">
            <span className="text-sm font-light">Kata Sandi</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={passwordIcon} alt="password" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40"
                type="text"
                id="password"
                placeholder="ketik sandi anda disini ..."
              />
            </div>
          </label>

          <button
            type="submit"
            className="w-[152px] h-[35px] mx-auto bg-yellow text-light rounded-2xl text-base font-semibold hover:text-yellow hover:bg-light mt-10 "
          >
            Masuk
          </button>
        </form>
        <Link href="/signup" className="text-[11px] font-light text-light ">
          Belum mempunyai akun?
        </Link>
      </div>
    </section>
  );
}

export default Login;
