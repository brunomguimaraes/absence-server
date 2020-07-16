# absence-server
Client side: https://github.com/brunomguimaraes/absence-client
Don't forget to run server before client
## How to run for the first time
- Install the dependencies:

`npm install`

- Migrate the database:

`npm run knex:migrate`

- Populate the database with:

`npm run knex:seed`

- run dev mode:

`npm run dev`

Done! Just run dev mode next time, your sqlite3 db is now local

### Technologies:
- Express
- Knex
- SQLite3

### TO-DOS:
* Apply relational database with foreign key
