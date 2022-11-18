import { Indicador } from "../../entities/indicador";
import persistence from "../config/persistence";
import IndicadorModel from "../models/indicador.model";

class IndicadorRepository {
    
    public async findIndicadores(eje: string | undefined): Promise<Indicador[]> {
        let indicadores: any[] = (eje!=undefined) ? await IndicadorModel.findAll({
            attributes: ["id", "nombre", "descripcion"],
            where: {
                nombre_eje: eje
            }
        }) : await IndicadorModel.findAll({
            attributes: ["id", "nombre", "descripcion"],
        });

        if (indicadores.length == 0) {
            throw new Error();
        }
        return (<Indicador[]> indicadores);
    }

}

export default new IndicadorRepository;