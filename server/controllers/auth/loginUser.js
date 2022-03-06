const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
const fetch = require("node-fetch");

const loginUser = async (req, res) => {
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

            if (!user) {
                return res.json("no user");
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if (!isMatch) {
                return res.json("incorrect password");
            }

            req.session.isAuth = true;
            req.session.user = req.body.email;

            return res.json("success");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = loginUser;
