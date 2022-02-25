import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default  async   function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { const result = await  axios.get("https://www.dariovettura.com/dance/wp-json/wp/v2/posts");
res.status(200).json(result.data) 
}
