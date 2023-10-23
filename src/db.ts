import { Pool } from "pg";

const pool = new Pool({
  connectionString:"postgres://authifyme_user:qnw3wrupurL3ev116PArXz9UZJOQuWVC@dpg-ckrcvgca4fmc73foa9gg-a.oregon-postgres.render.com/authifyme",
  ssl: true
});

pool.connect((err, client, done) => {
  if (err) {
    return console.error('Error al conectarse a la base de datos', err);
  } 
  console.log("DB Connected");
});

export default pool;