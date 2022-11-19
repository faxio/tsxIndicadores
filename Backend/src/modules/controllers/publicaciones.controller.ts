import { Request, Response } from 'express';
import PublicacionRepository from '../../persistence/repositories/publicacion.repository';

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
}

export default new PublicacionesController();