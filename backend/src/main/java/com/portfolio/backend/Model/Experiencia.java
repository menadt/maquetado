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
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idExperiencia;
    @Basic
    private String Institucion;
    private Boolean esActual;
    private String fechaInicio;
    private String fechaFinal;
    private String descripcion;

    public Experiencia(Long idExperiencia, String institucion, Boolean esActual, String fechaInicio, String fechaFinal,
            String descripcion) {
        this.idExperiencia = idExperiencia;
        Institucion = institucion;
        this.esActual = esActual;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.descripcion = descripcion;
    }

    public Experiencia() {
    }
}
