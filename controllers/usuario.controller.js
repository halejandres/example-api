const mysql = require('mysql')

const getUsuario = (req, res) => {
    res.json({
        mensaje: 'It works!'        
    });
};

module.exports = { getUsuario };