const merchantStoreName = () => {
  return (
    <div>
      {/* Main banner */}
      <div className="bg-[url('/bg1.jpg')] w-full h-[50vh] flex flex-col justify-center items-center bg-no-repeat bg-cover relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40"></div>

        <div className="z-20 relative w-2/3 md:w-1/2 text-center">
          <div className="BaksoAbang text-white text-2xl font-semibold pb-7">Bakso Abang</div>
          <div className="text-white font-Poppins text-center  text-[9px] font-normal pb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          </div>
          <button className="w-[130px] h-[31px] bg-[#2F2F2F] rounded-xl">
            <div className="text-center font-Poppins text-[13px] font-medium text-[#FAFBFC]">Kontak Kami</div>
          </button>
        </div>
      </div>

      {/* Sosmed */}
      <div className="w-full flex-shrink-0 bg-[#2F2F2F] flex flex-col items-center justify-center py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img
              src="/image9.png"
              alt="img"
              className="w-[20px] h-[20px] mr-2"
            />
            <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">@BaksoAbang_123</div>
          </div>
          <div className="flex items-center">
            <img
              src="/image10.png"
              alt="img"
              className="w-[20px] h-[20px] mr-2"
            />
            <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">@Bakso_Abang.123</div>
          </div>
          <div className="flex items-center">
            <img
              src="/image11.png"
              alt="img"
              className="w-[20px] h-[20px] mr-2"
            />
            <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">Bakso Abang</div>
          </div>
          <div className="flex items-center">
            <img
              src="/image12.png"
              alt="img"
              className="w-[20px] h-[20px] mr-2"
            />
            <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">0811 455 6212</div>
          </div>
        </div>
      </div>

      {/* Best seller */}

      <section className="bg-[#FFBD00] p-7">
        <div className="text-center text-white">
          <h3>Best seller</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7 gap-4">
          <div className="flex items-center min-h-[126px] gap-2 ">
            <div className="w-1/2 h-full bg-[url('/bg1.jpg')] bg-cover flex flex-col-reverse rounded-md overflow-hidden">
              <div className="bg-yellow text-white px-2 py-1">Baso jawir</div>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, asperiores?</p>
              <p>Rp 17.500</p>
            </div>
          </div>
          <div className="flex items-center min-h-[126px] gap-2 ">
            <div className="w-1/2 h-full bg-[url('/bg1.jpg')] bg-cover flex flex-col-reverse rounded-md overflow-hidden">
              <div className="bg-yellow text-white px-2 py-1">Baso jawir</div>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, asperiores?</p>
              <p>Rp 17.500</p>
            </div>
          </div>
          <div className="flex items-center min-h-[126px] gap-2 ">
            <div className="w-1/2 h-full bg-[url('/bg1.jpg')] bg-cover flex flex-col-reverse rounded-md overflow-hidden">
              <div className="bg-yellow text-white px-2 py-1">Baso jawir</div>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, asperiores?</p>
              <p>Rp 17.500</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOcatin */}
      <section className="bg-primary text-white flex flex-col items-center p-7">
        <div className="text-center">
          <h3>Lokasi</h3>
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

          <h3 className="mt-4">Kontak</h3>
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

          <h3 className="mt-4">Jam buka</h3>

          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default merchantStoreName;
