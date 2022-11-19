import { Publicacion } from "../../entities/publicacion";
import persistence from "../config/persistence";
import PublicacionModel from "../models/publicacion.model";

class PublicacionRepository {
    public async findPublicacionesByEstado(estado: string | undefined): Promise<Publicacion[]> {
        
        console.log(`[PUBLICACIONES_REPOSITORES]: estado: ${estado}`);
        
        let publicaciones: any[] = await PublicacionModel.findAll({
            attributes: [
                "publicacion_id",
                "titulo",
                "issn_doi",
                "autores",
                "revista",
                "disciplina",
                "autores_extranjeros",
                "anio",
            ],
            where: (estado!=undefined) ? {
                estado
            } : undefined,
        });

        if (publicaciones.length == 0) {
            throw new Error();
        }
        return (<Publicacion[]> publicaciones);
    }

    public async findPublicacionesByIdIndicador(idIndicador: string): Promise<Publicacion[]> {

        console.log(`[PUBLICACION_REPOSITORY] idIndicador ${idIndicador}`);

        let [publicaciones, _meta]: any[] = await persistence.query(`
            SELECT publicacion_id,
            titulo,
            issn_doi,
            autores,
            revista,
            disciplina,
            autores_extranjeros,
            anio FROM publicacion
            JOIN Publicaciones_Indicadores AS P_I ON P_I.id_publicacion=publicacion.publicacion_id
            WHERE P_I.id_indicador="${idIndicador}"
        `);

        if (publicaciones.length == 0) {
            throw new Error();
        }
        return (<Publicacion[]> publicaciones);
    }
}

export default new PublicacionRepository();