module.exports = {
  username: 'root',
  password: 'root',
  database: 'dvna',
  host: process.env.MYSQL_HOST || 'mysql-db',
  port: process.env.MYSQL_PORT || 3306,
  dialect: 'mysql'
}
