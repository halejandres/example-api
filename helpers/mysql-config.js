const mysql = require('mysql');

const pool = mysql.createPool({
    host : '',
    user : '',
    password: '',
    database: ''
});

pool.getConnection((err,connection)=> {
    if(err)
        throw err;
    console.log('Database connected successfully');
    connection.release();
});

module.exports = pool;