// const User = require("../../models/User");
// const bcrypt = require("bcryptjs");

// const loginUser = async (req, res) => {
//     const {email, password} = req.body;

//     const user = await User.findOne({email});
//     if(!user){
//         return res.json("failure");
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if(!isMatch){
//         return res.json("failure");
//     }

//     req.session.isAuth = true;

//     return res.json('success');
// };

// module.exports = loginUser;
