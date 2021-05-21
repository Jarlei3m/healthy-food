import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const { method } = req;

    if (method === 'GET') {
      res.status(200).json([
        {
          id: 1, title: 'Broccoli Salad with Bacon', image: 'images/comida_1.svg'
        },
        {
          id: 2, title: 'Classic Beef Burgers', image: 'images/comida_2.svg'
        },
        {
          id: 3, title: 'Classic Potato Salad', image: 'images/comida_3.svg'
        },
        {
          id: 4, title: 'Cherry Cobbler on the Grill', image: 'images/comida_4.svg'
        }
      ])
    } else {
      res.status(405).json({ message: 'Method not supported' })
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500 , message: err.message })
  }
}

export default handler;