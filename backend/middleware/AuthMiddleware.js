exports.isAuth = (req, res, next) => {
    if(req.cookies.token){
        next();
    } else {
        res.json({
            success: false,
            message: 'You are not authenticate...'
        })
    }
}

exports.isLoggedIn = (req, res, next) => {
    const {token} = req.cookies;
    if(!token){
        next();
    } else {
        res.json({
            success: true,
            message: 'You are logged in..'
        })
    }
}
