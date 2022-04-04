package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Carrera;

public interface ICarreraService {
    public void crearCarrera(Carrera carrera);

    public void borrarCarrera(Long idCarrera);

    public List<Carrera> listarCarreras();
}
