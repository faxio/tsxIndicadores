
class PublicacionesVariables {
    public id_pub_var: string;
    public valor: number;
    public id_publicacion: number;
    public id_variable: string;

    constructor(id: string, valor: number, idPublicacion: number, idVariable: string) {
        this.id_pub_var = id;
        this.valor = valor;
        this.id_publicacion = idPublicacion;
        this.id_variable = idVariable;
    }
}