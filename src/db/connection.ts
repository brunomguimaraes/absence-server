import knex from 'knex';
import path from 'path';

const connection = knex({
    pool: {
        afterCreate: (conn: any, cb: any) => {
            conn.run('PRAGMA foreign_keys = ON', cb);  //enable foreign keys
        }
    },
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'db.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;