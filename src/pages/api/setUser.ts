import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

type ResponseData = {
  code: number
  message: string
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (true) {
    let name = 'Alice'+ String(Math.floor(Math.random() * 1000));
    const user = await prisma.user.create({
      data: {
        name: name,
        email: name+'@prisma.io',
      },
    })
    console.log(user);
    if (user) {
      res.status(200).json({
        code: 0,
        message: 'success!',
        data: {
          user: user,
        },
      });
    } else {
      res.status(200).json({
        code: 1,
        message: 'user dose not login',
        data: "",
      });
    }
  }

  

}