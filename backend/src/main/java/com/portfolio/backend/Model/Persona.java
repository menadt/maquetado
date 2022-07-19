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
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    private String name;
    private String lastname;
    private String ubication;
    private String position;

    public Persona(Long id, String name, String lastname, String ubication, String position) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.ubication = ubication;
        this.position = position;
    }

    public Persona() {
    }
}
