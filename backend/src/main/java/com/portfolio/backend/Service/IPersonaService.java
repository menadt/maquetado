package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Persona;

public interface IPersonaService {
    public void crearPersona(Persona persona);

    public void borrarPersona(Long id);

    public List<Persona> listarPersonas();
}
