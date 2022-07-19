package com.portfolio.backend.Controller;

import java.util.List;

import com.portfolio.backend.Model.Proyecto;
import com.portfolio.backend.Service.IProyectoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ProyectoController {
    @Autowired
    IProyectoService proyectoService;

    @GetMapping("/Proyecto/{proyecto}")
    public String saludar(@PathVariable String proyecto) {
        return "Bienvenidos a Argentina Programa " + proyecto;
    }

    @PostMapping("/Proyecto")
    public void crearProyecto(@RequestBody Proyecto proyecto) {
        proyectoService.crearProyecto(proyecto);
    }

    @DeleteMapping("/Proyecto/{idProyecto}")
    public void borrarProyecto(@PathVariable Long idProyecto) {
        proyectoService.borrarProyecto(idProyecto);
    }

    @GetMapping("/Proyecto")
    @ResponseBody
    public List<Proyecto> listarProyectos() {
        return proyectoService.listarProyectos();
    }

}
