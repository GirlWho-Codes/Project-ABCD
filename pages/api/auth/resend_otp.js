import axios from 'axios';

export default async function handler(req, res) {
   await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/resend-otp`, {})
      .then((response) => {
         res.json(response);
      })
      .catch((error) => {
         console.log('>>> Error >>>>', error.response.data);

         res.status(error.response.status).json({
            status: error.response.status,
            data: error.response.data,
         });
      });
}
 