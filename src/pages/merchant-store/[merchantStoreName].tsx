import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";

const merchantStoreName = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {/* bg-[url-(${`http://localhost:5000/web-img/${data.mainImg}`}) */}
      {/* {JSON.stringify(data)} */}
      {/* Main banner */}
      <div className={`relative w-full bg-[#FF7F00] bg-cover bg-no-repeat`}>
        <img
          src={`http://localhost:5000/web-img/${data.mainImg}`}
          alt=""
          className="w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-40"></div>

        <div className="absolute left-1/2 top-1/2 z-20 w-2/3 -translate-x-1/2 -translate-y-1/2 text-center md:w-1/2">
          <div className="font-Poppins pb-8 text-xl font-semibold text-white md:text-5xl">
            {data.mainHeader}
          </div>
          <div className="font-Poppins pb-8 text-center  text-[10px] font-normal text-white md:text-sm">
            {data.mainDescription}
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
            <div className="font-Poppins text-center text-[12px] font-normal text-[#FAFBFC] md:text-base">
              {data.twitter}
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/image10.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[12px] font-normal text-[#FAFBFC] md:text-base">
              {data.instagram}
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/image11.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[12px] font-normal text-[#FAFBFC] md:text-base">
              {data.facebook}
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/image12.png"
              alt="img"
              className="mr-2 h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
            />
            <div className="font-Poppins text-center text-[12px] font-normal text-[#FAFBFC] md:text-base">
              {data.whatsapp}
            </div>
          </div>
        </div>
      </div>
      {/* Best seller */}
      <section className="bg-[#FF7F00] p-7">
        <div className="font-Poppins text-center text-xl text-white md:text-3xl">
          <h3>Best selling</h3>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product: any) => {
            return (
              <div
                className="flex items-center gap-2 md:gap-4"
                key={product._id}
              >
                <div className="flex h-full w-1/2 flex-col overflow-hidden rounded-md bg-[#B7BF52] bg-cover">
                  <img
                    src={`http://localhost:5000/web-img/${product.imgUrl}`}
                    alt=""
                  />
                  <div className="font-Poppins bg-yellow px-2 py-1 text-sm text-[#2F2F2F] md:text-lg">
                    {product.name}
                  </div>
                </div>
                <div className="font-Poppins w-1/2 text-[10px] text-[#FCFAEF] md:text-sm">
                  <p>{product.description}</p>
                  <p className="font-Poppins text-base md:text-xl ">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* LOcatin */}
      <section className="flex flex-col items-center bg-slate-600 p-7 text-white md:p-12">
        <div className="text-center ">
          <h3 className="text-sm  md:text-xl">Lokasi</h3>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="23"
              viewBox="0 0 19 25"
              fill="none"
            >
              <path
                d="M9.375 25C9.375 25 18.75 16.1156 18.75 9.375C18.75 6.8886 17.7623 4.50403 16.0041 2.74587C14.246 0.98772 11.8614 0 9.375 0C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 3.70503e-08 6.8886 0 9.375C0 16.1156 9.375 25 9.375 25ZM9.375 14.0625C8.1318 14.0625 6.93951 13.5686 6.06044 12.6896C5.18136 11.8105 4.6875 10.6182 4.6875 9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875C10.6182 4.6875 11.8105 5.18136 12.6896 6.06044C13.5686 6.93951 14.0625 8.1318 14.0625 9.375C14.0625 10.6182 13.5686 11.8105 12.6896 12.6896C11.8105 13.5686 10.6182 14.0625 9.375 14.0625Z"
                fill="#DE0000"
              />
            </svg>

            <div>
              <p>{data.address}</p>
            </div>
          </div>

          <h3 className="mt-4 text-sm  md:text-xl">Kontak</h3>
          <div className="flex gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.94618 0.797178C3.21959 0.524179 3.5479 0.312403 3.90935 0.175883C4.27079 0.0393643 4.65713 -0.0187805 5.04275 0.00530214C5.42837 0.0293848 5.80446 0.135145 6.14612 0.315574C6.48777 0.496004 6.78718 0.746982 7.0245 1.05188L9.82931 4.65517C10.3434 5.31613 10.5247 6.17711 10.3215 6.98965L9.4668 10.4117C9.4226 10.5889 9.42499 10.7746 9.47373 10.9506C9.52246 11.1267 9.61589 11.2871 9.74493 11.4164L13.5842 15.2557C13.7136 15.385 13.8743 15.4785 14.0507 15.5273C14.227 15.576 14.413 15.5783 14.5905 15.5338L18.0109 14.6791C18.4119 14.5788 18.8304 14.571 19.2349 14.6563C19.6393 14.7416 20.0191 14.9177 20.3454 15.1713L23.9487 17.9745C25.2441 18.9824 25.3628 20.8965 24.2034 22.0544L22.5877 23.6701C21.4314 24.8264 19.7032 25.3342 18.0922 24.767C13.9689 23.3162 10.2251 20.9557 7.13856 17.8605C4.04356 14.7744 1.68301 11.0312 0.231996 6.9084C-0.333654 5.29895 0.174181 3.56918 1.33048 2.41288L2.94618 0.797178Z"
                fill="#1BA53E"
              />
            </svg>

            <div>
              <p>{data.phoneNumber}</p>
            </div>
          </div>

          <h3 className="mt-4 text-sm md:text-xl">Jam buka</h3>

          <div>
            <p>{data.openSchedule}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { query } = context;
  const response = await axios.get("http://localhost:5000/web/mie kingkong");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
};

export default merchantStoreName;
