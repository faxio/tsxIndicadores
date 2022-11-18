export class Indicador {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public nombre_eje: string;

    constructor(id: string, nombre: string, descripcion: string, nombreEje: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nombre_eje = nombreEje;
    }
}