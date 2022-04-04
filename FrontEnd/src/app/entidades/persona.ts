export class Persona {
    fullName: string;
    posicion: string;
    ciudad: string;
    url_foto: string;
    correo: string;
    telefono: string;
    fechaDeNacimiento: string;
    github: string;
    linkedin: string;
    

    constructor(fullName: string, posicion: string, ciudad: string, url_foto: string, correo: string,
        telefono: string, fechaDeNacimiento: string, github: string, linkedin: string) {
        this.fullName = fullName;
        this.posicion = posicion;
        this.ciudad = ciudad;
        this.url_foto = url_foto;
        this.correo = correo;
        this.telefono = telefono;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.github = github;
        this.linkedin = linkedin;
    }

}