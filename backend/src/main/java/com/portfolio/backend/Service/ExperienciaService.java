package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Experiencia;
import com.portfolio.backend.Repository.ExperienciaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ExperienciaService implements IExperienciaService {
    @Autowired
    ExperienciaRepository experienciaRepo;

    @Override
    public void crearExperiencia(Experiencia experiencia) {
        experienciaRepo.save(experiencia);

    }

    @Override
    public void borrarExperiencia(Long idExperiencia) {
        experienciaRepo.deleteById(idExperiencia);
    }

    @Override
    public List<Experiencia> listarExperiencias() {
        return experienciaRepo.findAll();
    }
}
