import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [signUp, setSignUp] = useState({});
  const [value, onChange] = useState<Value>(new Date());

  const data = {
    ktpId: "4746585764531234",
    userName: "Ayu",
    phoneNumber: "885756390109",
    loginPassword: "12345678",
    birthDate: "11101998",
    gender: 1,
    email: "ayu@gmail.com",
  };

  // const getdata = async () => {
  //   const response = await axios.post(
  //     "http://34.101.154.14:8175/hackathon/user/auth/token",
  //     {
  //       username: "ayu",
  //       loginPassword: "12345678",
  //     }
  //   );

  //   console.log(response.data);
  //   return await axios
  //     .post("http://34.101.154.14:8175/hackathon/user/auth/create", data)
  //     .then((response) => {
  //       console.log("Berhasil mengirim data:", response);
  //     })
  //     .catch((error) => {
  //       console.error("Gagal mengirim data:", error);
  //     });
  // };
  // };
  // // function getdata() {
  // //   // URL endpoint untuk permintaan
  // //   var url = "http://34.101.154.14:8175/hackathon/user/auth/token"; // Gantilah dengan URL endpoint Anda

  // //   var data = {
  // //     username: "ayu",
  // //     loginPassword: "12345678",
  // //   };

  // //   // Mengubah data objek menjadi bentuk URL-encoded
  // //   var formData = new URLSearchParams();
  // //   for (var key in data) {
  // //     formData.append(key, data[key]);
  // //   }

  // //   // Membuat objek XMLHttpRequest
  // //   var xhr = new XMLHttpRequest();

  // //   // Mengatur jenis permintaan dan URL tujuan
  // //   xhr.open("POST", url, true);

  // //   // Mengatur header jika diperlukan (misalnya, jika server mengharapkan tipe konten tertentu)
  // //   // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // //   // Tangani peristiwa ketika permintaan berhasil
  // //   xhr.onload = function () {
  // //     if (xhr.status >= 200 && xhr.status < 300) {
  // //       // Tangani respon dari server jika permintaan berhasil
  // //       console.log("Permintaan berhasil: ", xhr.responseText);
  // //     } else {
  // //       // Tangani kesalahan jika permintaan gagal
  // //       console.error("Permintaan gagal: ", xhr.statusText);
  // //     }
  // //   };

  // //   // Tangani kesalahan jaringan
  // //   xhr.onerror = function () {
  // //     console.error("Permintaan gagal: jaringan tidak dapat diakses.");
  // //   };

  // //   // Kirim permintaan dengan data yang diisi
  // //   xhr.send(formData);
  // // }

  const getData2 = async () => {
    const response = await axios.get("/api/proxy");
    console.log(response.data);
  };

  return (
    <>
      <button onClick={() => getData2()}> aa</button>
      <form>
        <input type="number" placeholder="NIK" />
        <input type="text" placeholder="userName" />
        <input type="text" placeholder="loginPassword" />
        <input type="number" placeholder="phoneNumber" />
        <input type="text" placeholder="gender" />
        <input type="date" />
      </form>
    </>
  );
}
