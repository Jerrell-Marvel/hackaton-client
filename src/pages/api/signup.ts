import type { NextApiRequest, NextApiResponse } from "next";
import { CreateUserBody, CreateUserResponse } from "../../../type/User";
import axios, { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateUserResponse>
) {
  if (req.method === "POST") {
    try {
      const response = await axios.post<CreateUserResponse>(
        "http://34.101.154.14:8175/hackathon/user/auth/create",
        {
          ...req.body,
        }
      );

      const data = response.data;
      res.status(200).json(data);
    } catch (err: any) {
      return res.json(err);
      //   return res.status(err.response.status).json(err.response.data);
    }
  } else {
    //@ts-ignore
    return res.status(404).json({ error: "not found" });
  }
}
