import { PublicacionIndicador } from "../../entities/publicacionIndicador";
import PublicacionIndicadorModel from "../models/publicacionIndicador.model";

class PublicacionIndicadorRepository {
    public async createRelation(pubInd: PublicacionIndicador) {
        const res = await PublicacionIndicadorModel.create(pubInd);
        console.log(res.toJSON());
    }
}

export default new PublicacionIndicadorRepository();