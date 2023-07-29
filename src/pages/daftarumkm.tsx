import axios, { AxiosError } from "axios";
import Image from "next/image";
import technoBankLogo from "@/assets/BankLogo.svg";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { useMutation } from "react-query";

const Daftar = () => {
  const router = useRouter();
  const { data, mutate: sendData } = useMutation<any, AxiosError, string>({
    mutationFn: async (name) => {
      const response = await axios.post(
        "http://localhost:5000/merchantStore",
        {
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
          },
        },
      );

      return response.data;
    },

    onError: (err) => {
      //@ts-ignore
      if (err.response?.data.message) {
        router.push("/login");
      }
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendData(name);
  };

  const [name, setName] = useState("");
  return (
    <div className="h-screen bg-primary py-11 text-white">
      {/* <div>
        <span>technobank</span>
      </div> */}

      <div className="flex h-full w-full flex-col">
        <div className="hero flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 ">
            <Image src={technoBankLogo} alt="TechnoBank Logo" />
            <span className="text-base font-normal text-orange-50">
              technoBank
            </span>
          </div>
        </div>
        <div className="flex h-full items-center justify-center px-6">
          <form className="-mt-11" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="mb-5 text-center text-4xl font-semibold">
              {" "}
              Daftar usaha UMKM
            </h3>

            <label htmlFor="nama-usaha" className="mb-1 block">
              Nama usaha
            </label>

            <div className="flex items-center rounded-lg bg-[#D9D9D9] px-3 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_118_323)">
                  <path
                    d="M1.26562 1.6875C0.92996 1.6875 0.608044 1.82084 0.370693 2.05819C0.133342 2.29554 0 2.61746 0 2.95312L0 4.64062H5.0625C5.17439 4.64062 5.28169 4.68507 5.36081 4.76419C5.43993 4.84331 5.48438 4.95061 5.48438 5.0625C5.48438 5.27597 5.55188 5.60588 5.74256 5.87081C5.91722 6.11381 6.21253 6.32812 6.75 6.32812C7.28747 6.32812 7.58278 6.11381 7.75744 5.87081C7.94813 5.60588 8.01562 5.27597 8.01562 5.0625C8.01562 4.95061 8.06007 4.84331 8.13919 4.76419C8.21831 4.68507 8.32561 4.64062 8.4375 4.64062H13.5V2.95312C13.5 2.61746 13.3667 2.29554 13.1293 2.05819C12.892 1.82084 12.57 1.6875 12.2344 1.6875H1.26562Z"
                    fill="black"
                  />
                  <path
                    d="M13.5 5.48438H8.81634C8.75584 5.80073 8.62839 6.10049 8.44256 6.36356C8.11097 6.82425 7.56253 7.17188 6.75 7.17188C5.93747 7.17188 5.38903 6.82425 5.05744 6.36356C4.87163 6.10048 4.74419 5.80072 4.68366 5.48438H0V10.5469C0 10.8825 0.133342 11.2045 0.370693 11.4418C0.608044 11.6792 0.92996 11.8125 1.26562 11.8125H12.2344C12.57 11.8125 12.892 11.6792 13.1293 11.4418C13.3667 11.2045 13.5 10.8825 13.5 10.5469V5.48438Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_118_323">
                    <rect width="13.5" height="13.5" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="text"
                id="nama-usaha"
                className="w-full bg-[#D9D9D9] px-4 py-1 text-base text-black outline-none"
                placeholder="masukan nama usaha..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-7 flex w-full justify-center">
              <button
                type="submit"
                className="rounded-full bg-yellow px-4 py-2 uppercase"
              >
                Daftarkan
              </button>
            </div>
          </form>
        </div>
        {/* <form className="bg-pink-200">
          <h3>Daftar usaha UMKM</h3>

          <label htmlFor="nama-usaha">Nama usaha</label>

          <div>
            <input
              type="text"
              id="nama-usaha"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-yellow"
          >
            Daftarkan
          </button>
        </form> */}
      </div>

      {/* <form className="bg-pink-200">
        <h3>Daftar usaha UMKM</h3>

        <label htmlFor="nama-usaha">Nama usaha</label>

        <div>
          <input
            type="text"
            id="nama-usaha"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-yellow"
        >
          Daftarkan
        </button>
      </form> */}
    </div>
  );
};

export default Daftar;
