import { PublicacionIndicador } from "../../entities/publicacionIndicador";
import PublicacionIndicadorModel from "../models/publicacionIndicador.model";

class PublicacionIndicadorRepository {
    public async createRelation(pubInd: PublicacionIndicador) {
        await PublicacionIndicadorModel.create(pubInd);
    }
}

export default new PublicacionIndicadorRepository();