import path from 'path';

//knex dos not support JS's export default :(
module.exports = {
    pool: {
        afterCreate: (conn: any, cb: any) => {
          conn.run('PRAGMA foreign_keys = ON', cb);  //enable foreign keys
        }
      },
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'db', 'db.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'db', 'migrations')
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'db', 'seeds')
    },
    useNullAsDefault: true,
};