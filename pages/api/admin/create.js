import axios from 'axios';

export default async function handler(req, res) {
   const {
      firstName,
      lastName,
      gender,
      phoneNumber,
      email,
      role,
      profilePic,
      password,
   } = req.body;
 
   await axios
      .post(
         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/register`,
         {
            first_name: firstName,
            last_name: lastName,
            gender,
            phone_number: phoneNumber,
            email,
            password: password,
            role_id: role,
            profile_photo: profilePic,
         },
         {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         }
      )
      .then((resss) => {
         console.log(resss.data);
         res.status(200).json(resss.data);
      })
      .catch((err) => {
         console.log(err.response.data);

         res.status(err.response.status || 500).json(
            err.response.data.errors.password[0]
         );
      });
}
