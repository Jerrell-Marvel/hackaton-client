import usernameIcon from "@/assets/username.svg";
import passwordIcon from "@/assets/password.svg";
import technoBankLogo from "@/assets/BankLogo.svg";
import eyeSlash from "@/assets/eye-slash-fill.svg";
import eyeFill from "@/assets/eye-fill.svg";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { LoginUserBody } from "../../type/LoginData";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
import { useLoginContext } from "../../context/LoginContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

function Login() {
  const router = useRouter();
  const { setIsLogin, setUsername } = useLoginContext();

  const [login, setLogin] = useState<LoginUserBody>({
    username: "",
    loginPassword: "",
  });

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", login);
      if (response.data.success) {
        setIsLogin((val) => !val);
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
    <div className="w-full min-h-screen bg-primary  flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-primary w-96 min-h-[92vh] flex flex-col items-center justify-evenly z-10 px-20 lg:rounded-lg"
      >
        <div className="hero">
          <span className="flex justify-center items-center gap-2 mb-[45px]">
            <Image src={technoBankLogo} alt="TechnoBank Logo" />
            <span className="text-orange-50 text-base font-normal">
              technoBank
            </span>
          </span>
          <h1
            className={`${poppins.className} font-semibold text-light text-3xl text-center `}
          >
            Masuk
          </h1>
        </div>
        <form
          action="submit"
          className={`flex flex-col gap-[7px] ${poppins.className}`}
        >
          <label htmlFor="username" className="text-light px-2">
            <span className="text-sm font-light">Nama Pengguna</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={usernameIcon} alt="username" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40"
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
          <label htmlFor="password" className="text-light px-2">
            <span className="text-sm font-light">Kata Sandi</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={passwordIcon} alt="password" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-36"
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
            className="w-[152px] h-[35px] mx-auto bg-yellow text-light rounded-2xl text-base font-semibold hover:text-yellow hover:bg-light mt-10 hover:scale-105 transition"
          >
            Masuk
          </button>
        </form>
        <section className={`${poppins.className}`}>
          <Link
            href="/signup"
            className="text-[11px] font-light text-light text-center hover:underline "
          >
            Belum mempunyai akun?
          </Link>
          <Link
            href="/signup"
            type="submit"
            className="w-[100px] py-[5px] mx-auto hover:bg-yellow hover:text-light rounded-2xl text-base font-semibold  text-yellow bg-light flex items-center justify-center hover:scale-105 transition"
          >
            Daftar
          </Link>
        </section>
      </motion.div>
    </div>
  );
}

export default Login;
