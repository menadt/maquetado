export class Habilidad {
    nombreHabilidad:string;
    puntuacion:number;
    descripcion: string;

    constructor (nombreHabilidad:string, puntuacion:number, descripcion:string){
        this.nombreHabilidad=nombreHabilidad;
        this.puntuacion=puntuacion;
        this.descripcion=descripcion
    }
}
