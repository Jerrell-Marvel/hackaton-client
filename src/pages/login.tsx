import usernameIcon from "@/assets/username.svg";
import passwordIcon from "@/assets/password.svg";
import technoBankLogo from "@/assets/BankLogo.svg";
import eyeSlash from "@/assets/eye-slash-fill.svg";
import eyeFill from "@/assets/eye-fill.svg";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { LoginUserBody } from "../type/LoginData";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
import { useLoginContext } from "../context/LoginContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

function Login() {
  const router = useRouter();
  const { setisLoggedIn, setUsername } = useLoginContext();

  const [login, setLogin] = useState<LoginUserBody>({
    username: "",
    loginPassword: "",
  });

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", login);
      if (response.data.success) {
        setisLoggedIn((val) => !val);
        setUsername(login.username);
        localStorage.setItem("TOKEN", response.data.data.accessToken);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="z-10 flex min-h-[92vh] w-full max-w-screen-md flex-col items-center justify-evenly  px-20 "
      >
        <div className="hero">
          <span className="mb-[45px] flex items-center justify-center gap-2">
            <Image src={technoBankLogo} alt="TechnoBank Logo" />
            <span className="text-base font-normal text-orange-50">
              technoBank
            </span>
          </span>
          <h1
            className={`${poppins.className} text-center text-3xl font-semibold text-light `}
          >
            Masuk
          </h1>
        </div>
        <form
          action="submit"
          className={`flex flex-col gap-[7px] ${poppins.className}`}
        >
          <label htmlFor="username" className="px-2 text-light">
            <span className="text-sm font-light">Nama Pengguna</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={usernameIcon} alt="username" />
              <input
                className="w-40 bg-transparent text-[11px] text-black outline-none"
                type="text"
                id="username"
                placeholder="ketik nama pengguna disini ..."
                value={login.username}
                onChange={(e) =>
                  setLogin((data) => {
                    return { ...data, username: e.target.value };
                  })
                }
              />
            </div>
          </label>
          <label htmlFor="password" className="px-2 text-light">
            <span className="text-sm font-light">Kata Sandi</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={passwordIcon} alt="password" />
              <input
                className="w-36 bg-transparent text-[11px] text-black outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="ketik sandi anda disini ..."
                value={login.loginPassword}
                onChange={(e) =>
                  setLogin((data) => {
                    return { ...data, loginPassword: e.target.value };
                  })
                }
              />
              {showPassword ? (
                <Image
                  src={eyeFill}
                  alt="Show password"
                  onClick={() => setShowPassword((show) => !show)}
                />
              ) : (
                <Image
                  src={eyeSlash}
                  alt="hide password"
                  onClick={() => setShowPassword((show) => !show)}
                />
              )}
            </div>
          </label>

          <button
            type="submit"
            onClick={(e) => submitHandler(e)}
            className="mx-auto mt-10 h-[35px] w-[152px] rounded-2xl bg-yellow text-base font-semibold text-light transition hover:scale-105 hover:bg-light hover:text-yellow"
          >
            Masuk
          </button>
        </form>
        <section className={`${poppins.className}`}>
          <Link
            href="/signup"
            className="text-center text-[11px] font-light text-light hover:underline "
          >
            Belum mempunyai akun?
          </Link>
          <Link
            href="/signup"
            type="submit"
            className="mx-auto flex w-[100px] items-center justify-center rounded-2xl bg-light py-[5px]  text-base font-semibold text-yellow transition hover:scale-105 hover:bg-yellow hover:text-light"
          >
            Daftar
          </Link>
        </section>
      </motion.div>
    </div>
  );
}

export default Login;
