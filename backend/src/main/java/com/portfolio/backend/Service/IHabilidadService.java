package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Habilidad;

public interface IHabilidadService {
    public void crearHabilidad(Habilidad habilidad);

    public void borrarHabilidad(Long idHabilidad);

    public List<Habilidad> listarHabilidades();
}
