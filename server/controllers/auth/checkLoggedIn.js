const checkLoggedIn = (req, res)=>{
    if(req.session.isAuth){
        return res.json("success");
    }
    else{
        return res.json("failure");
    }
}

module.exports = checkLoggedIn;