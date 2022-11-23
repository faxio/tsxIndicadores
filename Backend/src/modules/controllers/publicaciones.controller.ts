import { Request, Response } from 'express';
import { PublicacionIndicador } from '../../entities/publicacionIndicador';
import { VariablePublicacion } from '../../entities/variablePublicacion';

import PublicacionRepository from '../../persistence/repositories/publicacion.repository';
import PublicacionIndicadorRepository from '../../persistence/repositories/publicacionIndicador.repository';
import variablePublicacionRepository from '../../persistence/repositories/variablePublicacion.repository';

class PublicacionesController {
    public getPublicaciones(req: Request, res: Response) {
        const { estado, idIndicador } = req.query;
        
        console.log(`[PUBLICACIONES CONTROLLER]: estado: ${estado} / idIndicador: ${idIndicador}`);
    
        (idIndicador==undefined)
            ? PublicacionRepository.findPublicacionesByEstado(<string> estado).then(publicaciones => {
                res.status(200).json({status: true, data: publicaciones});
            }, error => {
                res.status(404).json({status: false});
            })
            : PublicacionRepository.findPublicacionesByIdIndicador(<string> idIndicador).then(publicaciones => {
                res.status(200).json({status: true, data: publicaciones});
            }, error => {
                res.status(404).json({status: false});
            });
    }

    public editPublicacion(req: Request, res: Response) {
        const { idPublicacion } = req.params;
        const { accion, content } = req.body;

        console.log(`[idPublicacion]: ${idPublicacion}`);
        console.log(`[accion]: ${accion}`);
        console.log(`[content]: ${content}`);


        // TODO: validar body
        
        if(accion === "asignar_indicadores") {
            
            /**
             * content = id_indicadores[]
             * 
             * createRelation( {id_indicador, id_publicacion} )
             * 
             * newValue( {id_publicacion, id_variable, valor=1} )
             * 
             */
            content.map( async (idIndicador: string) => {
                console.log('hola esto es un ciclo');
                await PublicacionIndicadorRepository.createRelation(
                    new PublicacionIndicador(+idPublicacion, idIndicador)
                );
                    
                const idVar: number = (idIndicador==='M25') ? 1 : (idIndicador==='M26') ? 2 : 3;                

                await variablePublicacionRepository.newValue(    
                    new VariablePublicacion(idVar, +idPublicacion, 1)
                );

            })

            res.status(202).json({status: true});
            
            return;
        }

        res.status(404).json({status:false});
    }
}

export default new PublicacionesController();