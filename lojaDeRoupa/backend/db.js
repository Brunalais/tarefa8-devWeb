const sql = require('mssql');

const config = {
    user: 'seu_usuario',
    password: 'sua_senha',
    server: 'localhost',
    database: 'LojaRoupas',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

sql.connect(config).then(() => {
    console.log('Conectado ao SQL Server');
}).catch(err => {
    console.log('Erro na conexão:', err);
});

module.exports = sql;
