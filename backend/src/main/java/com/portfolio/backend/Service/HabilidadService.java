package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Habilidad;
import com.portfolio.backend.Repository.HabilidadRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadService implements IHabilidadService {
    @Autowired
    HabilidadRepository habilidadRepo;

    @Override
    public void crearHabilidad(Habilidad habilidad) {
        habilidadRepo.save(habilidad);
    }

    @Override
    public void borrarHabilidad(Long idHabilidad) {
        habilidadRepo.deleteById(idHabilidad);
    }

    @Override
    public List<Habilidad> listarHabilidades() {
        return habilidadRepo.findAll();
    }
}
