
export class PublicacionIndicador {
    public id_pub_ind: number | undefined;
    public id_publicacion: number;
    public id_indicador: string;

    constructor(idPublicacion: number, idIndicador: string) {
        this.id_publicacion = idPublicacion;
        this.id_indicador = idIndicador;
    }
}