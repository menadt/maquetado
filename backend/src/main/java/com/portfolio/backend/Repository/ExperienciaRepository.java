package com.portfolio.backend.Repository;

import com.portfolio.backend.Model.Experiencia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ExperienciaRepository extends JpaRepository<Experiencia, Long> {

}
