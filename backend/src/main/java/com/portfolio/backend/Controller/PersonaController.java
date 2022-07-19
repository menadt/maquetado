package com.portfolio.backend.Controller;

import java.util.List;

import com.portfolio.backend.Model.Persona;
import com.portfolio.backend.Service.IPersonaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaController {
    @Autowired
    IPersonaService ipersonaService;

    @GetMapping("/Persona/{nombre}")
    public String saludar(@PathVariable String nombre) {
        return "Bienvenidos a Argentina Programa " + nombre;
    }

    @PostMapping("/Persona")
    public void crearPersona(@RequestBody Persona persona) {
        ipersonaService.crearPersona(persona);
    }

    @DeleteMapping("/Persona/{id}")
    public void borrarPersona(@PathVariable Long id) {
        ipersonaService.borrarPersona(id);
    }

    @GetMapping("/Persona")
    @ResponseBody
    public List<Persona> listarPersonas() {
        return ipersonaService.listarPersonas();
    }
}
