import sequelize from './database.js'; 
import Cats from '../Models/Cats.js';    

sequelize.sync({force: false})
.then(()=>{
    console.log("Tábla létrehozva")
})
.catch((err)=>{
    console.log("Hiba a tábla létrehozásakor: ",err)
})
export default sequelize;