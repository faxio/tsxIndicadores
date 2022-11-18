import { Eje } from "../../entities/eje";
import EjeModel from "../models/eje.model";

class EjeRepository {
    // TODO: completar con las queries necesarias
    
    public async findEjes(): Promise<Eje[]> {
        let ejes: any[] = await EjeModel.findAll();
        if( ejes.length==0 ) {
            throw new Error();
        }
        return (<Eje[]> ejes);
    }
}

export default new EjeRepository();