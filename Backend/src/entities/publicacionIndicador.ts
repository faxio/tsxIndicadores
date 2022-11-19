
export class PublicacionIndicador {
    public id_pub_ind: number;
    public id_publicacion: number;
    public id_indicador: string;

    constructor(idPubInd: number, idPublicacion: number, idIndicador: string) {
        this.id_pub_ind = idPubInd;
        this.id_publicacion = idPublicacion;
        this.id_indicador = idIndicador;
    }
}