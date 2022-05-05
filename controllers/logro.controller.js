const mysql = require('mysql')
const conexion = require('../helpers/mysql-config');

const getLogro = (req,res) => {
    let sql = `SELECT * FROM logro`;
      conexion.query(sql, (error, results, fields) => {
      if(error){
         res.send(error);
      }
      res.json(results);
    });
}

const getLogroById = (req,res) => {
    let sql = `SELECT * FROM logro WHERE idLogro = ?`;
      conexion.query(sql, [req.params.id] ,(error, results, fields) => {
      if(error){
         res.send(error);
      }
      res.json(results);
    });
}

module.exports = {
    getLogro,
    getLogroById
}

