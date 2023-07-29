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

    const response = await axios.post(
      "http://localhost:5000/web/64c4b43944904e11cbfe2421",
      formData,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJ1aWQiOjI0NywiaXNzIjoiQk5DIiwiZXhwIjoxNjkwNjE2MDIyLCJpYXQiOjE2OTA2MTUxMjJ9.zW2km62FZiL8d9v36eE4IAbbeOAeqXCN4kKsYkQctso`,
        },
      }
    );

    console.log(response.data);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setMainBannerImg(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>

      {/* Prod 0 */}
      <div className="bg-black text-white p-6 border-red-400 border-2">
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
        />
      </div>

      {/* Prod 1 */}
      <div className="bg-black text-white p-6 border-red-400 border-2">
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
        />
      </div>

      {/* Prod 3 */}

      <div className="bg-black text-white p-6 border-red-400 border-2">
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
        />
      </div>

      {/* other field */}
      <input
        type="text"
        name="mainHeader"
        placeholder="mainHeader"
        value={data.mainHeader}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="mainDescription"
        placeholder="mainDescription"
        value={data.mainDescription}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        value={data.address}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="openSchedule"
        placeholder="openSchedule"
        value={data.openSchedule}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="phoneNumber"
        value={data.phoneNumber}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />

      {/* Social media */}
      <input
        type="text"
        name="twitter"
        placeholder="twitter"
        value={data.twitter}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="instagram"
        placeholder="instagram"
        value={data.instagram}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="facebook"
        placeholder="facebook"
        value={data.facebook}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input
        type="text"
        name="whatsapp"
        placeholder="whatsapp"
        value={data.whatsapp}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
    </div>
  );
};

export default CreateMerchantStore;
