import axios from 'axios';

export default async function handler(req, res) {
   const { id } = req.body;
   console.log('🚀 ~ file: deactivateUser.js ~ line 5 ~ handler ~ id', id);
   try {
      const response = await axios.post(
         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/users/delete/${id}`,
         {}
      );
      res.status(200).json(response.data);
   } catch (error) {
      console.log(
         '🚀 ~ file: deactivateUser.js ~ line 12 ~ handler ~ error',
         error
      );
      res.status(500).json({ error: error.message });
   }
}
 