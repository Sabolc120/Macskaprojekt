import dotenv from 'dotenv';
import path from 'path';
import { Sequelize } from 'sequelize';


const __dirname = path.resolve()
dotenv.config({ path: path.resolve(__dirname, '.env')});

const sequelize = new Sequelize(
  process.env.DATABASE,   // Adatbázis neve
  process.env.USER,       // Felhasználó
  process.env.PASSWORD,   // Jelszó
  {
    host: process.env.MYSQL_HOST,  // Host
    dialect: 'mysql',              // Használni kívánt adatbázis típusa
    port: 3306                    // Adatbázis portja
  }
);

// Kapcsolódás tesztelése
sequelize.authenticate()
  .then(() => {
    console.log("Kapcsolódás sikeres!");
  })
  .catch(err => {
    console.log(process.env.MYSQL_USER);  // Ellenőrizd, hogy megfelelő értéket ad-e
    console.log(process.env.MYSQL_PASSWORD);  // Ellenőrizd a jelszót is
    console.error("Hiba a kapcsolódás során:", err);
});

export default sequelize;