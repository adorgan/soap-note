const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    const {email, password} = req.body;

    console.log(password);

    let user = await User.findOne({email});

    if(user){
        return res.json("user exists");
    };

    const hashedPassword = await bcrypt.hash(password, 12);

    user = new User({
        email: email,
        password: hashedPassword,
    });

    await user.save();

    return res.json('success');
};

module.exports = registerUser;
