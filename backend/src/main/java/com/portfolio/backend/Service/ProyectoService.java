package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Proyecto;
import com.portfolio.backend.Repository.ProyectoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ProyectoService implements IProyectoService {
    @Autowired
    ProyectoRepository proyectoRepo;

    @Override
    public void crearProyecto(Proyecto proyecto) {
        proyectoRepo.save(proyecto);
    }

    @Override
    public void borrarProyecto(Long idProyecto) {
        proyectoRepo.deleteById(idProyecto);
    }

    @Override
    public List<Proyecto> listarProyectos() {
        return proyectoRepo.findAll();
    }

}
