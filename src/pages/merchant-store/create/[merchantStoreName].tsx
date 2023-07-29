import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";

const CreateMerchantStore = () => {
  const [data, setData] = useState({
    mainHeader: "",
    mainDescription: "",
    address: "",
    openSchedule: "",
    phoneNumber: "",
    twitter: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
  });

  const router = useRouter();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [mainBannerImg, setMainBannerImg] = useState<File | null>(null);

  const [productImg0, setProductImg0] = useState<File | null>(null);
  const [productData0, setProductData0] = useState<{
    name: string;
    description: string;
    price: string;
  }>({ name: "", description: "", price: "" });
  const [productImg1, setProductImg1] = useState<File | null>(null);
  const [productData1, setProductData1] = useState<{
    name: string;
    description: string;
    price: string;
  }>({ name: "", description: "", price: "" });
  const [productImg2, setProductImg2] = useState<File | null>(null);
  const [productData2, setProductData2] = useState<{
    name: string;
    description: string;
    price: string;
  }>({ name: "", description: "", price: "" });

  const handleSubmit = async () => {
    const formData = new FormData();

    if (productImg0) {
      formData.append("product-img", productImg0);
    }
    if (productImg1) {
      formData.append("product-img", productImg1);
    }
    if (productImg2) {
      formData.append("product-img", productImg2);
    }

    if (mainBannerImg) {
      formData.append("main-banner-img", mainBannerImg);
    }

    for (const key in data) {
      //@ts-ignore
      formData.append(key, data[key]);
    }

    // console.log(productData2);

    const products = [productData0, productData1, productData2];

    formData.append("products", JSON.stringify(products));

    // for (const entry of formData.entries()) {
    //   const [key, value] = entry;
    //   console.log(`${key}: ${value}`);
    // }

    const response = await axios.post(
      `http://localhost:5000/web/${router.query.merchantStoreName}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      },
    );

    console.log(response.data);
  };

  return (
    <>
      <div className="p-8">
        <p>
          Selamat datang di layanan pembuatan website kami! Untuk memulai proses
          pengembangan website impian Anda, silakan isi form di bawah ini dengan
          sejelas dan seakurat mungkin. Informasi yang Anda berikan akan
          membantu tim kami memahami kebutuhan Anda secara tepat, sehingga kami
          dapat menghasilkan website yang sesuai dengan harapan dan tujuan
          bisnis Anda.
        </p>
      </div>

      <button
        className="fixed bottom-4 right-4 rounded-md bg-green-400 px-8 py-3 text-white"
        onClick={() => {
          handleSubmit();
        }}
      >
        Simpan
      </button>
      <div>
        {/* Main banner */}
        <div className="relative flex h-[50vh] w-full flex-col items-center justify-center bg-[url('/bg1.jpg')] bg-cover bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-40"></div>

          <div className="relative z-20 flex w-2/3 flex-col items-center text-center md:w-1/2">
            <div className="mb-7 flex w-full items-center text-white">
              <label htmlFor="">Banner image</label>
              <input
                type="file"
                placeholder="main banner image"
                onChange={(e) => {
                  if (e.target.files) {
                    setMainBannerImg(e.target.files[0]);
                  }
                }}
                className="ml-2 text-white"
              />
            </div>

            <input
              className="mb-7  w-full rounded-sm px-2 text-black"
              type="text"
              name="mainHeader"
              placeholder="main header"
              value={data.mainHeader}
              onChange={(e) => {
                onChangeHandler(e);
              }}
            ></input>

            <input
              type="text"
              name="mainDescription"
              placeholder="mainDescription"
              value={data.mainDescription}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              className="mb-7 w-full rounded-sm px-2 text-black"
            />

            <button className="h-[31px] w-[130px] rounded-xl bg-[#2F2F2F]">
              <div className="font-Poppins text-center text-[13px] font-medium text-[#FAFBFC]">
                Kontak Kami
              </div>
            </button>
          </div>
        </div>

        {/* Sosmed */}
        <div className="flex w-full flex-shrink-0 flex-col items-center justify-center bg-[#2F2F2F] py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img
                src="/image9.png"
                alt="img"
                className="mr-2 h-[20px] w-[20px]"
              />
              {/* <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">@BaksoAbang_123</div> */}
              <input
                type="text"
                name="twitter"
                placeholder="twitter"
                value={data.twitter}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="rounded-sm px-2"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/image10.png"
                alt="img"
                className="mr-2 h-[20px] w-[20px]"
              />
              <input
                type="text"
                name="instagram"
                placeholder="instagram"
                value={data.instagram}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="rounded-sm px-2"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/image11.png"
                alt="img"
                className="mr-2 h-[20px] w-[20px]"
              />
              <input
                type="text"
                name="facebook"
                placeholder="facebook"
                value={data.facebook}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="rounded-sm px-2"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/image12.png"
                alt="img"
                className="mr-2 h-[20px] w-[20px]"
              />
              {/* <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">0811 455 6212</div> */}
              <input
                type="text"
                name="whatsapp"
                placeholder="whatsapp"
                value={data.whatsapp}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="rounded-sm px-2"
              />
            </div>
          </div>
        </div>

        {/* Best seller */}

        <section className="bg-[#FF7F00] p-7">
          <div className="text-center text-white">
            <h3>Best selling</h3>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-2 ">
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setProductImg0(e.target.files[0]);
                  }
                }}
              />

              <input
                type="text"
                name="name"
                placeholder="name"
                value={productData0.name}
                onChange={(e) => {
                  setProductData0({
                    ...productData0,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />
              <input
                type="text"
                name="description"
                placeholder="description"
                value={productData0.description}
                onChange={(e) => {
                  setProductData0({
                    ...productData0,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />

              <input
                type="text"
                name="price"
                placeholder="price"
                value={productData0.price}
                onChange={(e) => {
                  setProductData0({
                    ...productData0,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />
              {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, asperiores?</p>
                <p>Rp 17.500</p> */}
            </div>

            <div className="flex flex-col gap-2 ">
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setProductImg1(e.target.files[0]);
                  }
                }}
              />

              <input
                type="text"
                name="name"
                placeholder="name"
                value={productData1.name}
                onChange={(e) => {
                  setProductData1({
                    ...productData1,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />
              <input
                type="text"
                name="description"
                placeholder="description"
                value={productData1.description}
                onChange={(e) => {
                  setProductData1({
                    ...productData1,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />

              <input
                type="text"
                name="price"
                placeholder="price"
                value={productData1.price}
                onChange={(e) => {
                  setProductData1({
                    ...productData1,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setProductImg2(e.target.files[0]);
                  }
                }}
              />

              <input
                type="text"
                name="name"
                placeholder="name"
                value={productData2.name}
                onChange={(e) => {
                  setProductData2({
                    ...productData2,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />
              <input
                type="text"
                name="description"
                placeholder="description"
                value={productData2.description}
                onChange={(e) => {
                  setProductData2({
                    ...productData2,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />

              <input
                type="text"
                name="price"
                placeholder="price"
                value={productData2.price}
                onChange={(e) => {
                  setProductData2({
                    ...productData2,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="rounded-sm px-2"
              />
            </div>
          </div>
        </section>

        {/* LOcatin */}
        <section className="flex flex-col items-center bg-primary p-7 text-white">
          <div className="text-center">
            <h3>Lokasi</h3>
            <input
              type="text"
              name="address"
              placeholder="address"
              value={data.address}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              className="rounded-sm px-2 text-black"
            />

            <h3 className="mt-4">Kontak</h3>

            <input
              type="text"
              name="phoneNumber"
              placeholder="phoneNumber"
              value={data.phoneNumber}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              className="rounded-sm px-2 text-black"
            />

            <h3 className="mt-4">Jam buka</h3>

            <input
              type="text"
              name="openSchedule"
              placeholder="openSchedule"
              value={data.openSchedule}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              className="rounded-sm px-2 text-black"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateMerchantStore;
