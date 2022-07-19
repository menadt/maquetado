package com.portfolio.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.backend.Model.Carrera;
import com.portfolio.backend.Service.ICarreraService;

@RestController
public class CarreraController {

    @Autowired
    ICarreraService carreraService;

    @GetMapping("/Carrera/{nombre}")
    public String saludar(@PathVariable String nombre) {
        return "Bienvenidos a Argentina Programa " + nombre;
    }

    @PostMapping("/Carrera")
    public void crearCarrera(@RequestBody Carrera carrera) {
        carreraService.crearCarrera(carrera);
    }

    @DeleteMapping("/Carrera/{idCarrera}")
    public void borrarCarrera(@PathVariable Long idCarrera) {
        carreraService.borrarCarrera(idCarrera);
    }

    @GetMapping("/Carrera")
    @ResponseBody
    public List<Carrera> listarCarreras() {
        return carreraService.listarCarreras();
    }
}
