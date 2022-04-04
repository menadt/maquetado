package com.portfolio.backend.Repository;

import com.portfolio.backend.Model.Carrera;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarreraRepository extends JpaRepository<Carrera, Long> {

}
