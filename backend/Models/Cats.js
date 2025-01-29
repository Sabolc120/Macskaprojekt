import { DataTypes } from "sequelize";
import sequelize from "../Utils/database.js";

const Cats = sequelize.define('Cats',{
    id:{
        type: DataTypes.FLOAT,
        primaryKey: true,
        autoIncrement: true,
    },
    catname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    catpicture:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    visits:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps:false,
    tableName: 'cats'
})

export default Cats;