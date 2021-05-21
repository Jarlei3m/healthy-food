import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const { method } = req;

    if (method === 'GET') {
      res.status(200).json([
        {
          id: 1, avatar: 'images/blog_photo_2.svg', author: 'Kevin Ibrahim', title: 'Quick-start guide to nuts and seeds', image: 'images/blog_image_1.svg', url: 'quick-start-guide-to-nuts-and-seeds'
        },
        {
          id: 2, avatar: 'images/blog_photo_2.svg', author: 'Mike Jackson', title: 'Nutrition: Tips for Improving Your Health', image: 'images/bloco_image_2.svg', url: 'nutrition-tips-for-improving-your-health'
        },
        {
          id: 3, avatar: 'images/blog_photo_3.svg', author: 'Bryan McGregor', title: 'The top 10 benefits of eating healthy', image: 'images/bloco_image_3.svg', url: 'the-top-10-benefits-of-eating-healthy'
        },
        {
          id: 4, avatar: 'images/blog_photo_4.svg', author: 'Jashua', title: 'What Makes a Healthy Diet?', image: 'images/bloco_image_4.svg', url: 'what-makes-a-healthy-diet?'
        },
        
      ])
    } else {
      res.status(405).json({ message: 'Method not supported' })
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500 , message: err.message })
  }
}

export default handler;