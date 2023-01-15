import axios from 'axios';

export default async function handler(req, res) {
   const { id, username, firstName, lastName, phoneNumber, email, gender } =
      req.body;
      const bearerToken = process.env.BEARER_TOKEN;
      const deviceToken = process.env.DEVICE_TOKEN;
        
   try {
      const response = await axios.post(
         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/users/edit/${id}`,
         {
            username,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email,
            gender,
         },
        {
         headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Device-Token': deviceToken
         }
        }
      );
      res.status(200).json(response.data);
   } catch (error) {
      console.log('🚀 ~', error);
      res.status(err.response.status || 500).json({
         message: 'Something went wrong',
      });
   } 
}
