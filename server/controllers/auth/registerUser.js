const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
const fetch = require("node-fetch");
const registerUser = async (req, res) => {
    try {
        const recaptchaRes = await fetch(verifyURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.captcha}`,
        }).then((res) => res.json());

        if (recaptchaRes.success !== undefined && !recaptchaRes.success) {
            return res.json("failed captcha");
        } else {
            let user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.json("user exists");
            }

            const hashedPassword = await bcrypt.hash(req.body.password, 12);

            user = new User({
                email: req.body.email,
                password: hashedPassword,
            });

            await user.save();

            return res.json("success");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = registerUser;
