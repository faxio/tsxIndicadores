export class Publicacion {
    public publicacion_id: number;
    public issn_doi: string;
    public titulo: string;
    public autores: string;
    public revista: string;
    public autores_extranjeros: number;
    public indexacion: string;
    public anio: string;
    public citaciones: string;
    public clasificacion: string;
    public disciplina: string;
    public estado: string;
    public comentario: string | undefined;

    constructor(
        publicacionId: number,
        issDoi: string,
        titulo: string,
        autores: string,
        revista: string,
        autoresExtranjeros: number,
        indexacion: string,
        anio: string,
        citaciones: string,
        clasificacion: string,
        disciplina: string,
        estado: string,
        comentario: string | undefined
    ) {
        this.publicacion_id = publicacionId;
        this.issn_doi = issDoi;
        this.titulo = titulo;
        this.autores = autores;
        this.revista = revista;
        this. autores_extranjeros = autoresExtranjeros;
        this.indexacion = indexacion;
        this.anio = anio;
        this.citaciones = citaciones;
        this.clasificacion = clasificacion;
        this.disciplina = disciplina;
        this.estado = estado;
        this.comentario = comentario;

    }
  
}