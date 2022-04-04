package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Persona;
import com.portfolio.backend.Repository.PersonaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService {
    @Autowired
    PersonaRepository persoRepo;

    @Override
    public void crearPersona(Persona persona) {
        persoRepo.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        persoRepo.deleteById(id);
    }

    @Override
    public List<Persona> listarPersonas() {
        return persoRepo.findAll();
    }
}
