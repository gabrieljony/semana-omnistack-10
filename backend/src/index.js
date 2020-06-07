const app = require('./app');

// Metodos: get, post, put, delete

// Tipos de Parâmetros
// Query Params: Get | request.query(Filtros, ordenação, paginação, ...) São incorporados na url, visivelmente
// Route Params: Put ou Delete | request.params (identificar um recurso na alteração ou remoção)
// Body: Post ou Put | request.body (dados para a criação ou alteração de um registro)

// Banco de dados
// MongoDB (banco não-relacional)
// Vou usar o Sqlite3 Banco Relacional

app.listen(3333);
