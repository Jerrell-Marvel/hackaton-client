// @ts-nocheck

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "http://34.101.154.14:8175/hackathon/user/auth/token",
      {
        username: "asep test",
        loginPassword: "12345678",
      }
    );

    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
