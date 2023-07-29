import usernameIcon from "@/assets/username.svg";
import phoneNumberIcon from "@/assets/telephone-fill.svg";
import personCard from "@/assets/person-vcard.svg";
import passwordIcon from "@/assets/password.svg";
import verifPasswordIcon from "@/assets/shield-lock.svg";
import calendar from "@/assets/calendar.svg";
import technoBankLogo from "@/assets/BankLogo.svg";
import eyeSlash from "@/assets/eye-slash-fill.svg";
import eyeFill from "@/assets/eye-fill.svg";
import mail from "@/assets/envelope-fill.svg";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { CreateUserBody } from "../type/User";
import axios from "axios";
import { useRouter } from "next/router";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showVerifPassword, setShowVerifPassword] = useState<boolean>(false);
  const [verifPassword, setVerifPassword] = useState<string>("");
  const [passwordIsSame, setPasswordIsSame] = useState<boolean>(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [male, setMale] = useState(true);

  const router = useRouter();
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      if (passwordIsSame) {
        const response = await axios.post("/api/signup", signup);
        if (response.data.success) {
          router.push("/login");
        } else {
          setUserAlreadyExist(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dayHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 2) {
      setDay(e.target.value);
    }
  };
  const monthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 2) {
      setMonth(e.target.value);
    }
  };
  const yearHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setYear(e.target.value);
    }
  };

  useEffect(() => {
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      const date = day + month + year;
      setSignup((data) => {
        return { ...data, birthDate: date };
      });
    }
  }, [day, month, year]);

  const [signup, setSignup] = useState<CreateUserBody>({
    ktpId: "",
    username: "",
    loginPassword: "",
    phoneNumber: "",
    birthDate: "",
    gender: male ? 0 : 1,
    email: "",
  });

  const verifPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordIsSame(() => e.target.value === signup.loginPassword);
    setVerifPassword(e.target.value);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-primary py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="z-10 flex min-h-screen max-w-2xl flex-col items-center justify-evenly bg-primary p-12 px-20 lg:w-full lg:rounded-xl"
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

          {userAlreadyExist ? (
            <div className="text-red-600 underline decoration-red-600">
              User already exists
            </div>
          ) : (
            ""
          )}
        </div>
        <form
          action="submit"
          className={`lg:max-w-450 flex flex-col justify-around gap-[7px] lg:flex-row lg:flex-wrap ${poppins.className}`}
        >
          <label htmlFor="ktpId" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">ID KTP</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={personCard} alt="ID KTP" />
              <input
                className="w-40 bg-transparent text-[11px] text-black outline-none"
                type="text"
                id="ktpId"
                placeholder="ketik ID KTP anda disini ..."
                value={signup.ktpId}
                onChange={(e) =>
                  setSignup((data) => {
                    return { ...data, ktpId: e.target.value };
                  })
                }
              />
            </div>
          </label>
          <label htmlFor="username" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">Nama Pengguna</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={usernameIcon} alt="username" />
              <input
                className="w-40 bg-transparent text-[11px] text-black outline-none"
                type="text"
                id="username"
                placeholder="ketik nama pengguna disini ..."
                value={signup.username}
                onChange={(e) =>
                  setSignup((data) => {
                    return { ...data, username: e.target.value };
                  })
                }
              />
            </div>
          </label>
          <label htmlFor="password" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">Kata Sandi</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={passwordIcon} alt="password" />
              <input
                className="w-36 bg-transparent text-[11px] text-black outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="ketik sandi anda disini ..."
                value={signup.loginPassword}
                onChange={(e) =>
                  setSignup((data) => {
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
          <label htmlFor="verifPassword" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">
              Verifikasi Kata Sandi
            </span>
            <div className="flex h-[38px] gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={verifPasswordIcon} alt="Verif Logo" />
              <input
                className={`text-decoration-thickness w-36 bg-transparent text-[11px] text-black decoration-red-600 underline-offset-4 outline-none ${
                  passwordIsSame ? "" : "underline"
                }`}
                type={showVerifPassword ? "text" : "password"}
                id="verifPassword"
                placeholder="ketik sandi anda disini ..."
                value={verifPassword}
                onChange={(e) => {
                  verifPasswordHandler(e);
                }}
              />
              {showVerifPassword ? (
                <Image
                  src={eyeFill}
                  alt="Show password"
                  onClick={() => setShowVerifPassword((show) => !show)}
                />
              ) : (
                <Image
                  src={eyeSlash}
                  alt="hide password"
                  onClick={() => setShowVerifPassword((show) => !show)}
                />
              )}
            </div>
          </label>
          <label htmlFor="phoneNumber" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">Nomor Telepon</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={phoneNumberIcon} alt="phoneNumber" />
              <input
                className="w-40 bg-transparent text-[11px] text-black outline-none"
                type="text"
                id="phoneNumber"
                placeholder="ketik nomor anda disini ..."
                value={signup.phoneNumber}
                onChange={(e) =>
                  setSignup((data) => {
                    return { ...data, phoneNumber: e.target.value };
                  })
                }
              />
            </div>
          </label>
          <label className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">Tanggal Lahir</span>
            <div className="flex h-[38px] items-center gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={calendar} alt="birthDate" />
              <div className="flex w-full flex-row justify-evenly">
                <input
                  className="w-5 bg-transparent text-[11px] text-black outline-none"
                  type="number"
                  id="birthDate"
                  value={day}
                  onChange={(e) => dayHandler(e)}
                  placeholder="DD"
                />
                <span className="text-primary"> | </span>
                <input
                  className="w-5 bg-transparent text-[11px] text-black outline-none"
                  type="number"
                  id="birthDate"
                  value={month}
                  onChange={(e) => monthHandler(e)}
                  placeholder="MM"
                />
                <span className="text-primary"> | </span>
                <input
                  className="w-8 bg-transparent text-[11px] text-black outline-none"
                  type="number"
                  id="birthDate"
                  value={year}
                  onChange={(e) => yearHandler(e)}
                  placeholder="YYYY"
                />
              </div>
            </div>
          </label>
          <label htmlFor="gender" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">Jenis Kelamin</span>
            <div className="flex flex-col items-start justify-start gap-2 px-4 text-[10px] font-medium">
              <label
                className="flex items-center justify-start gap-1"
                htmlFor="pria"
              >
                <input
                  type="radio"
                  id="pria"
                  className="text-black"
                  checked={male}
                  onChange={(e) => {
                    setMale(e.target.checked);
                    setSignup((val) => {
                      return { ...val, gender: e.target.checked ? 0 : 1 };
                    });
                  }}
                />
                Pria
              </label>
              <label
                className="flex items-center justify-start gap-1"
                htmlFor="perempuan"
              >
                <input
                  type="radio"
                  id="perempuan"
                  className="text-black"
                  checked={!male}
                  onChange={(e) => {
                    setMale(!e.target.checked);
                    setSignup((val) => {
                      return { ...val, gender: !e.target.checked ? 0 : 1 };
                    });
                  }}
                />
                Perempuan
              </label>
            </div>
          </label>
          <label htmlFor="email" className="w-56 px-2 text-light">
            <span className="text-[13px] font-light">E-mail</span>
            <div className="flex h-[38px]  gap-2 rounded-[10px] bg-zinc-300 px-4">
              <Image src={mail} alt="email" />
              <input
                className="w-40 bg-transparent text-[11px] text-black decoration-2 outline-none invalid:underline invalid:decoration-red-600"
                type="email"
                id="email"
                placeholder="masukkan e-mail anda disini ..."
                value={signup.email}
                onChange={(e) =>
                  setSignup((data) => {
                    return { ...data, email: e.target.value };
                  })
                }
              />
            </div>
          </label>

          <button
            onClick={(e) => submitHandler(e)}
            type="submit"
            className="mx-auto mt-10 h-[35px] w-[152px] rounded-2xl bg-yellow text-base font-semibold text-light transition hover:scale-105 hover:bg-light hover:text-yellow"
          >
            Buat Akun
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
