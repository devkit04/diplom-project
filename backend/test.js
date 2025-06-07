let jwt = require('jsonwebtoken')

const SECRET_KEY = 'very_secret_key';

// let payload = {
//     login: 'devkit04',
// }

// let options = {
//     expiresIn: '1h'
// }

// let token = jwt.sign(payload, SECRET_KEY, options);

// console.log(token);


let check_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImRldmtpdDA0IiwiaWF0IjoxNzI3OTY0ODIxLCJleHAiOjE3Mjc5Njg0MjF9.C__xezJyIohb9VoGVklUOxaw7t_0L9lNJRF3Zntq_KE';

console.log(
    jwt.verify(check_token, SECRET_KEY)
);