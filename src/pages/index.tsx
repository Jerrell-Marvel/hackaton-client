import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [signUp, setSignUp] = useState({});
  const [value, onChange] = useState<Value>(new Date());

  return (
    <form>
      <input type="number" placeholder="NIK" />
      <input type="text" placeholder="userName" />
      <input type="text" placeholder="loginPassword" />
      <input type="number" placeholder="phoneNumber" />
      <input type="text" placeholder="gender" />
      <input type="date" />
    </form>
  );
}
