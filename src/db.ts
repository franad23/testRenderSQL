import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString:process.env.POSTGRESQLURL as string,
  ssl: true
});

pool.connect((err, client, done) => {
  if (err) {
    return console.error('Error al conectarse a la base de datos', err);
  } 
  console.log("DB Connected");
});

const createTableQuery = `
  CREATE TABLE ejemplo2 (
    id serial PRIMARY KEY,
    nombre VARCHAR(255),
    edad INT
  );
`;

// pool.query(createTableQuery, (err, result) => {
//   if (err) {
//     return console.error('Error al crear la tabla', err);
//   }
//   console.log('Tabla creada con éxito');
// });

const poolQuerie = async () => {
  const res = await pool.query('INSERT INTO ejemplo2 (nombre, edad) VALUES ($1, $2)', ['Juan', 20]);
  console.log(res);
}

// poolQuerie();

const poolQuerieSelect = async () => {
  const res = await pool.query('SELECT * FROM ejemplo2');
  console.log(res);
}

// poolQuerieSelect();

const dropDB = async () => {
  const res = await pool.query('DROP TABLE ejemplo2');
  console.log(res);
} 
// dropDB();

const showTables = async () => {
  const res  = await pool.query('SHOW TABLES');
  console.log(res);

}
showTables()
export default pool;