// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  desc: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    name: "Just a boilerplate for next",
    desc: " Magnificent Next.js boilerplate with TypeScript, ESLint, Prettier and everything else you need to bootstrap your Next.js project.",
  });
}
