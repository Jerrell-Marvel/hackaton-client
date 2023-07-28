import type { NextApiRequest, NextApiResponse } from "next";
import { LoginUserBody, LoginUserResponse } from "../../../type/User";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginUserResponse>) {
  if (req.method === "POST") {
    const { username, loginPassword }: LoginUserBody = req.body;

    try {
      const response = await axios.post<LoginUserResponse>("http://34.101.154.14:8175/hackathon/user/auth/token", {
        ...req.body,
      });

      const data = response.data;

      res.status(200).json(data);
    } catch (err: any) {
      return res.status(err.response.status).json(err.response.data);
    }
  } else {
    //@ts-ignore
    return res.status(404).json({ error: "not found" });
  }
}
