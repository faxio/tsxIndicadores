
import { VariablePublicacion } from "../../entities/variablePublicacion";

import VariablePublicacionModel from "../models/variablePublicacion.model";

class VariablePublicacionRepository {
    
    public async newValue(varPub: VariablePublicacion) {
        const res = await VariablePublicacionModel.create(varPub);
        console.log('valor asignado')
        console.log(res.toJSON());
    }
}

export default new VariablePublicacionRepository();