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
public class Habilidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idHabilidad;
    @Basic
    String nombreHabilidad;
    Integer puntuacion;
    String descripcion;
    public Habilidad() {
    }
    public Habilidad(Long idHabilidad, String nombreHabilidad, Integer puntuacion, String descripcion) {
        this.idHabilidad = idHabilidad;
        this.nombreHabilidad = nombreHabilidad;
        this.puntuacion = puntuacion;
        this.descripcion = descripcion;
    }
}
