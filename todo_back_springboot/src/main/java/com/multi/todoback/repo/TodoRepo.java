package com.multi.todoback.repo;

import com.multi.todoback.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TodoRepo extends JpaRepository<Todo, Long> {
    Optional<Todo> findById(Long id);
}
