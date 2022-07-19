package com.portfolio.backend.Controller;

import java.util.List;

import com.portfolio.backend.Model.Experiencia;
import com.portfolio.backend.Service.IExperienciaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ExperienciaController {
    @Autowired
    IExperienciaService experienciaService;

    @GetMapping("/Experiencia/{experiencia}")
    public String saludar(@PathVariable String experiencia) {
        return "Bienvenidos a Argentina Programa " + experiencia;
    }

    @PostMapping("/Experiencia")
    public void crearExperiencia(@RequestBody Experiencia experiencia) {
        experienciaService.crearExperiencia(experiencia);
    }

    @DeleteMapping("/Experiencia/{idExperiencia}")
    public void borrarExperiencia(@PathVariable Long idExperiencia) {
        experienciaService.borrarExperiencia(idExperiencia);
    }

    @GetMapping("/Experiencia")
    @ResponseBody
    public List<Experiencia> listarExperiencias() {
        return experienciaService.listarExperiencias();
    }

}
