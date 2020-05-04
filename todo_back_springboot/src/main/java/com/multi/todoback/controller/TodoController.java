package com.multi.todoback.controller;

import com.multi.todoback.config.ResourceNotFoundException;
import com.multi.todoback.entity.Todo;
import com.multi.todoback.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("api")
public class TodoController {
    @Autowired private TodoRepo todoRepo;

    @GetMapping("todos")
    public List<Todo> getTodoList(){
        return todoRepo.findAll();
    }
    @GetMapping("todos/{id}")
    public Todo getTodo(@PathVariable Long id){
        return todoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo", "id", id));
    }
    @PostMapping("todos")
    public List<Todo> createTodo(@RequestBody Todo todo){
        todo.setChecked(false);
        todoRepo.save(todo);
        return todoRepo.findAll();
    }
    @DeleteMapping("todos")
    public List<Todo> deleteAllTodo(){
        todoRepo.deleteAll();
        return todoRepo.findAll();
    }
    @DeleteMapping("todos/{id}")
    public List<Todo> deleteTodo(@PathVariable Long id){
        Todo todo = todoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo", "id", id));
        todoRepo.delete(todo);
        return todoRepo.findAll();
    }
    @PutMapping("todos/{id}")
    public List<Todo> createTodo(@PathVariable Long id, @RequestBody Todo todo){
        Todo todoOrigin = todoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo", "id", id));
        todoOrigin.setChecked(todo.getChecked());
        todoOrigin.setText(todo.getText());
        todoRepo.save(todo);
        return todoRepo.findAll();
    }
}
