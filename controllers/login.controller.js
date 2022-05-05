const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const user = req.body.user;
    const password = req.body.password;

    console.log(user, password)

    let mensaje = 'Usuario no autenticado';
    let token = '';

    const payload = {
        id: 1,
        user: req.body.user
    }

    if(user === "hugo" && password === "123"){
        token = jwt.sign(payload, app.get("key"), {expiresIn: 7200})
        mensaje = 'Usuario autenticado'
    }

    res.json({
        mensaje: mensaje,
        token: token
    })
};

module.exports = { login }