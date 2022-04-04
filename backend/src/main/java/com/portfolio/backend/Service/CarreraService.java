package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Carrera;
import com.portfolio.backend.Repository.CarreraRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CarreraService implements ICarreraService {
    @Autowired
    CarreraRepository carreraRepo;

    @Override
    public void crearCarrera(Carrera carrera) {
        carreraRepo.save(carrera);
    }

    @Override
    public void borrarCarrera(Long idCarrera) {
        carreraRepo.deleteById(idCarrera);
    }

    @Override
    public List<Carrera> listarCarreras() {
        return carreraRepo.findAll();
    }
}
