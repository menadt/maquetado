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
public class Carrera {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idCarrera;
    @Basic
    private String titulo;
    private String fechaInicio;
    private String fechaFinal;
    private String institucion;
    private Boolean recibido;

    public Carrera(Long idCarrera, String titulo, String fechaInicio, String fechaFinal,
            String institucion, Boolean recibido) {
        this.idCarrera = idCarrera;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.institucion = institucion;
        this.recibido = recibido;
    }

    public Carrera() {
    }
}
