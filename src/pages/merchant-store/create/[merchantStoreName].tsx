import axios from "axios";
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

    const response = await axios.post("http://localhost:5000/web/64c4b43944904e11cbfe2421", formData, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJ1aWQiOjI0NywiaXNzIjoiQk5DIiwiZXhwIjoxNjkwNjI5MDkxLCJpYXQiOjE2OTA2MjgxOTF9.8nQ9VnME4SgNezOk0DuHr88RSYqo7KASpV_k8kjqCZg`,
      },
    });

    console.log(response.data);
  };

  return (
    <>
      <div className="p-8">
        <p>
          Selamat datang di layanan pembuatan website kami! Untuk memulai proses pengembangan website impian Anda, silakan isi form di bawah ini dengan sejelas dan seakurat mungkin. Informasi yang Anda berikan akan membantu tim kami
          memahami kebutuhan Anda secara tepat, sehingga kami dapat menghasilkan website yang sesuai dengan harapan dan tujuan bisnis Anda.
        </p>
      </div>

      <button className="fixed bottom-4 right-4 px-8 py-3 bg-green-400 text-white rounded-md">Simpan</button>
      <div>
        {/* Main banner */}
        <div className="bg-[url('/bg1.jpg')] w-full h-[50vh] flex flex-col justify-center items-center bg-no-repeat bg-cover relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40"></div>

          <div className="z-20 relative w-2/3 md:w-1/2 text-center flex flex-col items-center">
            <div className="w-full flex text-white items-center mb-7">
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
              className="text-black  px-2 rounded-sm mb-7 w-full"
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
              className="text-black px-2 rounded-sm mb-7 w-full"
            />

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
              {/* <div className="text-center font-Poppins text-[9px] font-normal text-[#FAFBFC]">@BaksoAbang_123</div> */}
              <input
                type="text"
                name="twitter"
                placeholder="twitter"
                value={data.twitter}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="px-2 rounded-sm"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/image10.png"
                alt="img"
                className="w-[20px] h-[20px] mr-2"
              />
              <input
                type="text"
                name="instagram"
                placeholder="instagram"
                value={data.instagram}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="px-2 rounded-sm"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/image11.png"
                alt="img"
                className="w-[20px] h-[20px] mr-2"
              />
              <input
                type="text"
                name="facebook"
                placeholder="facebook"
                value={data.facebook}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className="px-2 rounded-sm"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/image12.png"
                alt="img"
                className="w-[20px] h-[20px] mr-2"
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
                className="px-2 rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Best seller */}

        <section className="bg-[#FF7F00] p-7">
          <div className="text-center text-white">
            <h3>Best selling</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7 gap-4">
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
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
                className="px-2 rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* LOcatin */}
        <section className="bg-primary text-white flex flex-col items-center p-7">
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
              className="text-black px-2 rounded-sm"
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
              className="text-black px-2 rounded-sm"
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
              className="text-black px-2 rounded-sm"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateMerchantStore;
