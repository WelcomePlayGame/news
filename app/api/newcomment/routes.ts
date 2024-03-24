import type { NextApiRequest, NextApiResponse } from 'next';
import { saveComment } from '@/lib/action';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await saveComment(req.body);
      res.status(200).json({ message: 'good' });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Error saving comment', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
