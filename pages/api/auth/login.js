// import axios from 'axios';

// export default async function handler(req, res) {
//    try {
//       // Get username and password from request body
//       const { username, password } = req.body;

//       let url = 'api/v1/admin/login';

//       // const header =

//       console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`);

//       if (method === 'POST') {
//          const response = await axios
//             .post(
//                `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
//                { username, password }
//                // REQ_HEADER,
//             )
//             .then((response) => {
//                return response;
//             })
//             .catch((error) => {
//                return error.response;
//             });

//             let config = {
//                method: 'get',
//                url: 'https://server.lifesavers.ng/api/v1/admin/login',
//                // headers: {
//                //    ...data.getHeaders(),
//                // },
//                data: { username, password },
//             };

//             axios(config)
//                .then((response) => {
//                   console.log(JSON.stringify(response.data));
//                })
//                .catch((error) => {
//                   console.log(error);
//                });

//          // res.status(200).json(response.data);
//       } else {
//          // Return error response
//          res.status(401).json({ message: 'Username or password is incorrect' });
//       }
//    } catch (error) {
//       // res.status(500).json({ error: error.message })
//       res.json(error);
//    }
// }



