import { DataTypes, Model } from "sequelize";
import { Publicacion } from "../../entities/publicacion";
import persistence from "../config/persistence";

class PublicacionModel extends Model<Publicacion> {}

PublicacionModel.init({
    publicacion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    issn_doi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    autores: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    revista: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    autores_extranjeros: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    indexacion: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    anio: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    citaciones: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clasificacion: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    disciplina: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    estado: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
},{
    tableName: "publicacion",
    timestamps: false,
    sequelize: persistence
});

export default PublicacionModel