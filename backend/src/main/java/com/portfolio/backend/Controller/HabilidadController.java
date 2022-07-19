package com.portfolio.backend.Controller;

import java.util.List;

import com.portfolio.backend.Model.Habilidad;
import com.portfolio.backend.Service.IHabilidadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HabilidadController {
    @Autowired
    IHabilidadService habilidadService;

    @GetMapping("/Habilidad/{habilidad}")
    public String saludar(@PathVariable String habilidad) {
        return "Bienvenidos a Argentina Programa " + habilidad;
    }

    @PostMapping("/Habilidad")
    public void crearHabilidad(@RequestBody Habilidad habilidad) {
        habilidadService.crearHabilidad(habilidad);
    }

    @DeleteMapping("/Habilidad/{idHabilidad}")
    public void borrarHabilidad(@PathVariable Long idHabilidad) {
        habilidadService.borrarHabilidad(idHabilidad);
    }

    @GetMapping("/Habilidad")
    @ResponseBody
    public List<Habilidad> listarHabilidades() {
        return habilidadService.listarHabilidades();
    }

}
