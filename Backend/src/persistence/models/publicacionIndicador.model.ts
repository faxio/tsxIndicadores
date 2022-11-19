import { DataTypes, Model } from "sequelize";

import persistence from "../config/persistence";
import { PublicacionIndicador } from "../../entities/publicacionIndicador";


class PublicacionIndicadorModel extends Model<PublicacionIndicador> {}

PublicacionIndicadorModel.init({
    id_pub_ind: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_indicador: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'Publicaciones_Indicadores',
    timestamps: false,
    sequelize: persistence
});

export default PublicacionIndicadorModel;