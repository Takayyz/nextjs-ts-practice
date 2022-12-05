// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type HelloResponse = {
  name: string;
}

const Sample = (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: 'Taka' });
};

export default Sample;

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
