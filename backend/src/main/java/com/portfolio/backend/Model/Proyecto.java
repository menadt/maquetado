package com.portfolio.backend.Model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idProyecto;
    @Basic
    private String nombre;
    private String anio;
    private String descripcion;
    private String url1;
    private String url2;
    private String url3;

    public Proyecto(Long idProyecto, String nombre, String anio, String descripcion, String url1, String url2,
            String url3) {
        this.idProyecto = idProyecto;
        this.nombre = nombre;
        this.anio = anio;
        this.descripcion = descripcion;
        this.url1 = url1;
        this.url2 = url2;
        this.url3 = url3;
    }

    public Proyecto() {
    }
}