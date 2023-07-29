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
import { CreateUserBody } from "../../type/User";
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
    <div className="w-full py-8 min-h-screen bg-primary flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-primary p-12 min-h-screen flex flex-col items-center justify-evenly z-10 px-20 max-w-2xl lg:w-full lg:rounded-xl"
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
          className={`flex flex-col lg:max-w-450 lg:flex-row lg:flex-wrap justify-around gap-[7px] ${poppins.className}`}
        >
          <label htmlFor="ktpId" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">ID KTP</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={personCard} alt="ID KTP" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40"
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
          <label htmlFor="username" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">Nama Pengguna</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={usernameIcon} alt="username" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40"
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
          <label htmlFor="password" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">Kata Sandi</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={passwordIcon} alt="password" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-36"
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
          <label htmlFor="verifPassword" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">
              Verifikasi Kata Sandi
            </span>
            <div className="flex gap-2 h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={verifPasswordIcon} alt="Verif Logo" />
              <input
                className={`outline-none bg-transparent text-black text-decoration-thickness underline-offset-4 text-[11px] w-36 decoration-red-600 ${
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
          <label htmlFor="phoneNumber" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">Nomor Telepon</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={phoneNumberIcon} alt="phoneNumber" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40"
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
          <label className="text-light px-2 w-56">
            <span className="text-[13px] font-light">Tanggal Lahir</span>
            <div className="flex gap-2 items-center h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={calendar} alt="birthDate" />
              <div className="w-full flex flex-row justify-evenly">
                <input
                  className="outline-none bg-transparent text-black text-[11px] w-5"
                  type="number"
                  id="birthDate"
                  value={day}
                  onChange={(e) => dayHandler(e)}
                  placeholder="DD"
                />
                <span className="text-primary"> | </span>
                <input
                  className="outline-none bg-transparent text-black text-[11px] w-5"
                  type="number"
                  id="birthDate"
                  value={month}
                  onChange={(e) => monthHandler(e)}
                  placeholder="MM"
                />
                <span className="text-primary"> | </span>
                <input
                  className="outline-none bg-transparent text-black text-[11px] w-8"
                  type="number"
                  id="birthDate"
                  value={year}
                  onChange={(e) => yearHandler(e)}
                  placeholder="YYYY"
                />
              </div>
            </div>
          </label>
          <label htmlFor="gender" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">Jenis Kelamin</span>
            <div className="flex flex-col justify-start items-start font-medium text-[10px] gap-2 px-4">
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
          <label htmlFor="email" className="text-light px-2 w-56">
            <span className="text-[13px] font-light">E-mail</span>
            <div className="flex gap-2  h-[38px] bg-zinc-300 rounded-[10px] px-4">
              <Image src={mail} alt="email" />
              <input
                className="outline-none bg-transparent text-black text-[11px] w-40 invalid:underline invalid:decoration-red-600 decoration-2"
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
            className="w-[152px] h-[35px] mx-auto bg-yellow text-light rounded-2xl text-base font-semibold hover:text-yellow hover:bg-light mt-10 hover:scale-105 transition"
          >
            Buat Akun
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
