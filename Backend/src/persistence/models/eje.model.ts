import { DataTypes, Model } from "sequelize";
import { Eje } from "../../entities/eje";
import persistence from "../config/persistence";


class EjeModel extends Model<Eje> {}

EjeModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
},{
    tableName: 'Ejes',
    timestamps: false,
    sequelize: persistence
})

export default EjeModel;