package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Proyecto;

public interface IProyectoService {
    public void crearProyecto(Proyecto proyecto);

    public void borrarProyecto(Long idProyecto);

    public List<Proyecto> listarProyectos();

}
