const merchantStoreName = () => {
  return (
    <div>
      {/* Main banner */}
      <div className="relative flex h-[42vh] w-full flex-col items-center justify-center bg-slate-400 bg-cover bg-no-repeat">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-40"></div>

        <div className="relative z-20 w-2/3 text-center md:w-1/2">
          <div className="BaksoAbang font-Poppins pb-8 text-xl font-semibold text-white md:text-5xl">
            Bakso Abang
          </div>
          <div className="font-Poppins pb-8 text-center  text-[10px] font-normal text-white md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </div>
          <button className="h-[31px] w-[130px] rounded-xl bg-[#2F2F2F]">
            <div className="font-Poppins text-center text-[13px] font-medium text-[#FAFBFC]">
              Kontak Kami
            </div>
          </button>
        </div>
      </div>

      {/* Sosmed */}
      <div className="flex w-full flex-shrink-0 flex-col items-center justify-center bg-[#2F2F2F] py-6 md:py-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img
              src="/image9.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[9px] font-normal text-[#FAFBFC] md:text-base">
              @BaksoAbang_123
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/image10.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[9px] font-normal text-[#FAFBFC] md:text-base">
              @Bakso_Abang.123
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/image11.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[9px] font-normal text-[#FAFBFC] md:text-base">
              Bakso Abang
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/image12.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[9px] font-normal text-[#FAFBFC] md:text-base">
              0811 455 6212
            </div>
          </div>
        </div>
      </div>

      {/* Best seller */}

      <section className="bg-[#FF7F00] p-7 md:p-12">
        <div className="font-Poppins text-center text-xl text-white md:text-3xl">
          <h3>Best selling</h3>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex min-h-[126px] items-center gap-2 ">
            <div className="flex h-full w-1/2 flex-col-reverse overflow-hidden rounded-md bg-[#B7BF52] bg-cover">
              <div className="font-Poppins bg-yellow px-2 py-1 text-sm text-[#2F2F2F] md:text-lg">
                Baso jawir
              </div>
            </div>
            <div className="font-Poppins w-1/2 text-[10px] text-[#FCFAEF] md:text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, asperiores?
              </p>
              <p className="font-Poppins text-base md:text-xl ">Rp 17.500</p>
            </div>
          </div>
          <div className="flex min-h-[126px] items-center gap-2 ">
            <div className="flex h-full w-1/2 flex-col-reverse overflow-hidden rounded-md bg-[#B7BF52] bg-cover">
              <div className="font-Poppins bg-yellow px-2 py-1 text-sm text-[#2F2F2F] md:text-lg">
                Baso jawir
              </div>
            </div>
            <div className="font-Poppins w-1/2 text-[10px] text-[#FCFAEF] md:text-sm ">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, asperiores?
              </p>
              <p className="font-Poppins text-base md:text-xl">Rp 17.500</p>
            </div>
          </div>
          <div className="flex min-h-[126px] items-center gap-2 ">
            <div className="flex h-full w-1/2 flex-col-reverse overflow-hidden rounded-md bg-[#B7BF52] bg-cover">
              <div className="font-Poppins bg-yellow px-2 py-1 text-sm text-[#2F2F2F] md:text-lg">
                Baso jawir
              </div>
            </div>
            <div className="font-Poppins w-1/2 text-[10px] text-[#FCFAEF] md:text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, asperiores?
              </p>
              <p className="font-Poppins text-base md:text-xl">Rp 17.500</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOcatin */}
      <section className="flex flex-col items-center bg-slate-600 p-7 text-white md:p-12">
        <div className="text-center ">
          <h3 className="text-sm  md:text-xl">Lokasi</h3>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="25"
              viewBox="0 0 19 25"
              fill="none"
            >
              <path
                d="M9.375 25C9.375 25 18.75 16.1156 18.75 9.375C18.75 6.8886 17.7623 4.50403 16.0041 2.74587C14.246 0.98772 11.8614 0 9.375 0C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 3.70503e-08 6.8886 0 9.375C0 16.1156 9.375 25 9.375 25ZM9.375 14.0625C8.1318 14.0625 6.93951 13.5686 6.06044 12.6896C5.18136 11.8105 4.6875 10.6182 4.6875 9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875C10.6182 4.6875 11.8105 5.18136 12.6896 6.06044C13.5686 6.93951 14.0625 8.1318 14.0625 9.375C14.0625 10.6182 13.5686 11.8105 12.6896 12.6896C11.8105 13.5686 10.6182 14.0625 9.375 14.0625Z"
                fill="#DE0000"
              />
            </svg>

            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <h3 className="mt-4 text-sm  md:text-xl">Kontak</h3>
          <div className="flex gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="25"
              viewBox="0 0 19 25"
              fill="none"
            >
              <path
                d="M9.375 25C9.375 25 18.75 16.1156 18.75 9.375C18.75 6.8886 17.7623 4.50403 16.0041 2.74587C14.246 0.98772 11.8614 0 9.375 0C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 3.70503e-08 6.8886 0 9.375C0 16.1156 9.375 25 9.375 25ZM9.375 14.0625C8.1318 14.0625 6.93951 13.5686 6.06044 12.6896C5.18136 11.8105 4.6875 10.6182 4.6875 9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875C10.6182 4.6875 11.8105 5.18136 12.6896 6.06044C13.5686 6.93951 14.0625 8.1318 14.0625 9.375C14.0625 10.6182 13.5686 11.8105 12.6896 12.6896C11.8105 13.5686 10.6182 14.0625 9.375 14.0625Z"
                fill="#DE0000"
              />
            </svg>

            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <h3 className="mt-4 text-sm md:text-xl">Jam buka</h3>

          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default merchantStoreName;
